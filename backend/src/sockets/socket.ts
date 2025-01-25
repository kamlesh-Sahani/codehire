import {Server} from "socket.io"
import {Server as httpServer} from "http"
const socketInit = (server:httpServer)=>{
    const io = new Server(server);


    io.on("connection",(socket)=>{
        console.log("socket is connected",socket.id);






        socket.on("disconected",()=>{
            console.log("socket disconnected")
        })
    })
}

export default socketInit;