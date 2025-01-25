import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "please enter the email"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "please enter the password"],
        select: false,
        minlength: [6, "password must be atleast 6 charater"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
userSchema.index({ email: 1 });
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
userSchema.methods.generateToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    });
    return token;
};
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};
const userModel = mongoose?.models?.user || mongoose.model("user", userSchema);
export default userModel;
