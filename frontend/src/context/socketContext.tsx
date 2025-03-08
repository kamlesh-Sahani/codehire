import socketInit from "@/lib/socket";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";


interface socketContextType{
socketRef:any;
socketRoomId:string;
setSocketRoomId:Dispatch<SetStateAction<string>>;
}

 export const SocketContext =createContext<socketContextType>({
    socketRef:null,
    socketRoomId:"",
    setSocketRoomId:()=>{}
 });


 const SocketProvider = ({children}:{children:ReactNode})=>{
    const socketRef = useRef<any>(null);
    const [socketRoomId,setSocketRoomId] = useState<string>("")

    useEffect(()=>{
        socketRef.current = socketInit();
    },[])
        return <SocketContext.Provider value={{socketRef,socketRoomId,setSocketRoomId}}>
        {children}void
    </SocketContext.Provider>
 }

 export default SocketProvider