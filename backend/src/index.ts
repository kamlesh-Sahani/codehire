import express from 'express';
import {createServer} from "http";
import {config} from "dotenv";
config();
import cors from "cors";
import socketInit from './sockets/socket.js';
import cookieParser from "cookie-parser";
import dbConnect from './utils/dbConnect.js';
import userRouter from './routes/user.route.js';
import interviewRouter from "./routes/interview.route.js";
// env variables
const PORT = process.env.PORT || 2001;
const FRONTEND_URL = process.env.FRONTEND_URL!;

// middlewares
const app = express();
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:[FRONTEND_URL],
    credentials:true
}))



const server = createServer(app);
socketInit(server);

// database conntection ;
dbConnect();



// home route
app.get("/",(req,res)=>{
     res.json({
        message:"server is running"
    })
})


// apis 

app.use("/api/v1/user",userRouter);
app.use("/api/v1/interview",interviewRouter);

server.listen(PORT,()=>{
    console.log(`server is running on: localhost:${PORT}`);
})


