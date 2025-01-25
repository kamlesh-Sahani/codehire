import { Server } from "socket.io";
const socketInit = (server) => {
    const io = new Server(server);
    io.on("connection", (socket) => {
        console.log("socket is connected", socket.id);
        socket.on("disconected", () => {
            console.log("socket disconnected");
        });
    });
};
export default socketInit;
