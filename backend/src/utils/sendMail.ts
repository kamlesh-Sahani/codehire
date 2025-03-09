
import nodemailer from "nodemailer"

const sendEmail = async (recipients:string[], subject:string, html:string) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // or use 'SMTP' settings
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // App password (if using Gmail)
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: recipients.join(","), // Join multiple emails with commas
            subject,
            html, // Optional HTML content
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

export default sendEmail;
