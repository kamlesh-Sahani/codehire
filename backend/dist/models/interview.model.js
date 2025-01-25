import mongoose, { Schema } from "mongoose";
const interviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "The interview must have a title"]
    },
    interviewerId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: [true, "Please specify the interviewer"],
    },
    intervieweeId: [{
            type: Schema.Types.ObjectId,
            ref: "user",
        }],
    canvasId: {
        type: Schema.Types.ObjectId,
        ref: "canvas",
    },
    editorId: {
        type: Schema.Types.ObjectId,
        ref: "editor",
    },
    performanceId: {
        type: Schema.Types.ObjectId,
        ref: "performance",
    },
}, { timestamps: true });
interviewSchema.index({ interviewerId: 1 });
const interviewModel = mongoose?.models?.interview || mongoose.model("interview", interviewSchema);
export default interviewModel;
