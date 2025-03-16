import mongoose,{Document} from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface UserType extends Document{
    name:string;
    password:string;
    email:string;
    isDeleted:boolean;
    comparePassword:(password:string)=>Promise<boolean>;
    generateToken:()=>string;
    isActive:boolean;
} 

const userSchema  = new mongoose.Schema<UserType>({
    name:{
        type:String,
        required:[true,"please enter name"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"please enter the email"],
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"please enter the password"],
        select:false,
        minlength:[6,"password must be atleast 6 charater"]
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    isActive:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
});

userSchema.index({ email: 1 });



userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
    next();
});

userSchema.methods.generateToken = function(){
     const  token = jwt.sign({_id:this._id},process.env.JWT_SECRET!,{
        expiresIn:"1d"
    })
    return token;
}

userSchema.methods.comparePassword = async function(password:string){
    return await bcrypt.compare(password,this.password);
}
const userModel = mongoose?.models?.user as mongoose.Model<UserType> || mongoose.model<UserType>("user",userSchema);
export default userModel;