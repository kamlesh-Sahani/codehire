import interviewModel from "../models/interview.model.js";
import sendEmail from "../utils/sendMail.js";
export const newInterview = async (req, res) => {
    try {
        const { date, time, title, intervieweeEmails, mode, mailMessage, roomId, mailSubject, } = req.body;
        if (!date ||
            !time ||
            !title ||
            intervieweeEmails.length === 0 ||
            !mode ||
            !mailMessage ||
            !roomId ||
            !mailSubject) {
            return res.status(400).json({
                success: false,
                message: "please fill the all fields",
            });
        }
        const interviewer = req.user;
        if (!interviewer) {
            return res.status(400).json({
                success: false,
                message: "interviewer is not found",
            });
        }
        const isExist = await interviewModel.findOne({ roomId });
        if (isExist) {
            return res.status(400).json({
                success: false,
                message: "interview is already created with this room id",
            });
        }
        const interview = await interviewModel.create({
            title,
            date,
            time,
            intervieweeEmails,
            mode,
            mailMessage,
            roomId,
            interviewerId: interviewer._id,
        });
        if (!interview) {
            return res.status(400).json({
                success: false,
                message: "interview failed to schedule please try again",
            });
        }
        const mailHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interview Invitation</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f7f9;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
            text-align: center;
        }
        .header {
            background: #007bff;
            padding: 20px;
            border-radius: 10px 10px 0 0;
        }
        .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 25px;
            color: #444;
            text-align: left;
            line-height: 1.7;
        }
        .details {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            font-size: 16px;
        }
        .details p {
            margin: 8px 0;
            font-weight: 500;
            color: #333;
        }
        .cta {
            margin-top: 20px;
        }
        .cta a {
            background: #007bff;
            color: white;
            text-decoration: none;
            padding: 14px 24px;
            border-radius: 6px;
            font-size: 16px;
            font-weight: bold;
            display: inline-block;
            transition: 0.3s ease;
        }
        .cta a:hover {
            background: #0056b3;
        }
        .footer {
            margin-top: 25px;
            font-size: 14px;
            color: #777;
            text-align: center;
            padding-top: 15px;
            border-top: 1px solid #eee;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="header">
            <h1>You're Invited for an Interview 🎉</h1>
        </div>

        <div class="content">
           <p>${mailMessage}</p>

            <div class="details">
                <p><strong>📝 Title:</strong> ${title}</p>
                <p><strong>📅 Date:</strong> ${date}</p>
                <p><strong>⏰ Time:</strong> ${time}</p>
                <p><strong>📍 Mode:</strong> ${mode}</p>
                <p><strong>🔑 Room ID:</strong> ${roomId}</p>
            </div>

            

            <div class="cta">
                <a href="${process.env.FRONTEND_URL}/interview/${roomId}" target="_blank">Join Interview</a>
            </div>

            <p>If you have any questions, feel free to contact us.</p>
        </div>

        <div class="footer">
            <p>&copy; 2025 Hire Flow AI. All Rights Reserved.</p>
        </div>
    </div>

</body>
</html>
`;
        await sendEmail(intervieweeEmails, mailSubject, mailHtml);
        return res.status(201).json({
            success: true,
            message: "successfully interview scheduled",
            interview,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "internal error",
        });
    }
};
