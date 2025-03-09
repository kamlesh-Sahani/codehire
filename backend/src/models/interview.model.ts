import mongoose,{Document, Schema} from "mongoose";

export interface InterviewType extends Document{
    title:string;
    interviewerId:mongoose.Types.ObjectId;
    intervieweeEmails:string[];
    canvasId:mongoose.Types.ObjectId;
    editorId:mongoose.Types.ObjectId;
    performanceId:mongoose.Types.ObjectId;
    date:string;
    time:string;
    mode:"online"|"offline",
    mailMessage:string;
    roomId:string;
    mailSubject:string;
}

const interviewSchema  = new mongoose.Schema<InterviewType>({
    title:{
        type:String,
        required:[true,"The interview must have a title"]
    },
    interviewerId:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required: [true, "Please specify the interviewer"],
    },
    intervieweeEmails:[{
        type:String,
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
    date:{
        type:String,
        required:[true,'please enter the date of interview']
    }
    ,
    time:{
        type:String,
        required:[true,'please enter the time of interview']
    },
    mode:{
        type:String,
        required:[true,'please enter the mode of interview'],
        enum:["online","offline"]
    },
    mailMessage:{
        type:String,
        required:[true,'please enter the mail of interview']
    },
    roomId:{
        type:String,
        required:[true,"please enter the roomid"],
        unique:true
    }



    
},{timestamps:true})

interviewSchema.index({interviewerId:1})

const interviewModel = mongoose?.models?.interview as mongoose.Model<InterviewType> || mongoose.model("interview",interviewSchema);
export default interviewModel;
