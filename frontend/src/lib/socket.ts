import {io} from "socket.io-client";

const socketInit = ()=>{
    const socket =  io(process.env.NEXT_PUBLIC_BACKEND_URL,{
        withCredentials: true
    });
    return socket;
}
export default socketInit;