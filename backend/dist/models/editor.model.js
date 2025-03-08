import mongoose from "mongoose";
const editorSchema = new mongoose.Schema({
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true
    },
    content: {
        type: String,
        default: ""
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    roomId: {
        type: String,
        default: ""
    }
}, { timestamps: true });
editorSchema.index({ ownerId: 1 });
const editorModel = mongoose.models.editor || mongoose.model("editor", editorSchema);
export default editorModel;
