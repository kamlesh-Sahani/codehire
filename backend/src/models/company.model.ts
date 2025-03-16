import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export interface ICompany extends Document {
  companyName: string;
  amdminEmail: string;
  adminName:string;
  address?: {
    city: string;
    state: string;
    country: string;
  };
  password:string;
  isActive:boolean;
  comparePassword:(password:string)=>Promise<boolean>;
  generateToken:()=>string;
}

const CompanySchema: Schema = new Schema<ICompany>(
  {
    companyName: { type: String, required: true },
    amdminEmail: { type: String, required: true, unique: true },
    adminName: { type: String, required: true },
    address: {
      city: { type: String },
      state: { type: String },
      country: { type: String },
    },
    password:{
        type:String,
        required:[true,"please enter the password"],
        select:false,
        minlength:[6,"password must be atleast 6 charater"]
    },
    isActive:{
        type:Boolean,
        default:false
    }
  },
  { timestamps: true }
);




CompanySchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(String(this.password),10);
    next();
});

CompanySchema.methods.generateToken = function(){
     const  token = jwt.sign({_id:this._id},process.env.JWT_SECRET!,{
        expiresIn:"1d"
    })
    return token;
}

CompanySchema.methods.comparePassword = async function(password:string){
    return await bcrypt.compare(password,this.password);
}

 const companyModel = mongoose.models.company as mongoose.Model<ICompany> || mongoose.model<ICompany>("company", CompanySchema);

export default companyModel;
