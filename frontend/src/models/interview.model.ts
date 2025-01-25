import mongoose,{Document, Schema} from "mongoose";

export interface InterviewType extends Document{
    title:string;
    interviewerId:mongoose.Types.ObjectId;
    intervieweeId:mongoose.Types.ObjectId[];
    canvasId:mongoose.Types.ObjectId;
    editorId:mongoose.Types.ObjectId;
    performanceId:mongoose.Types.ObjectId;
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
    intervieweeId:[{
        type:Schema.Types.ObjectId,
        ref:"user",
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
},{timestamps:true})

interviewSchema.index({interviewerId:1})

const interviewModel = mongoose?.models?.interview as mongoose.Model<InterviewType> || mongoose.model("interview",interviewSchema);
export default interviewModel;
