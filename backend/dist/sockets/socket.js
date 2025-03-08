import { Server } from "socket.io";
import editorModel from "../models/editor.model.js";
const socketInit = (server) => {
    const io = new Server(server, {
        cors: {
            origin: process.env.FRONTEND_URL,
            methods: ["GET", "POST"],
            credentials: true
        }
    });
    io.on("connection", (socket) => {
        console.log("socket is connected", socket.id);
        socket.on("joinInterview", async (roomId) => {
            socket.join(roomId);
            const existingCode = await editorModel.findOne({ roomId });
            if (existingCode) {
                socket.emit("loadCode", existingCode.content);
            }
            console.log(`user ${socket.id} joined interview ${roomId}`);
        });
        socket.on("changeCode", async ({ roomId, code }) => {
            console.log(roomId, code, "code");
            socket.to(roomId).emit("codeUpdate", code);
            const editor = await editorModel.findOne({ roomId });
            if (editor) {
                editor.content = code;
                await editor.save({ validateBeforeSave: false });
            }
        });
        socket.on("disconected", () => {
            console.log("socket disconnected");
        });
    });
};
export default socketInit;
