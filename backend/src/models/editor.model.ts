import mongoose, { Document }  from "mongoose";

export interface EditorType extends  Document{
    ownerId:mongoose.ObjectId;
    content:string;
    isDeleted:boolean;
    roomId:string;

}
const editorSchema = new mongoose.Schema<EditorType>({
    ownerId:{
        type:mongoose.Types.ObjectId,
        ref:"user",
        required:true
    },
    content:{
        type:String,
        default:""
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    roomId:{
        type:String,
        default:""
    }
},{timestamps:true});

editorSchema.index({ownerId:1});
const editorModel = mongoose.models.editor as mongoose.Model<EditorType> || mongoose.model<EditorType>("editor",editorSchema);
export default editorModel;