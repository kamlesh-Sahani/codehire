import mongoose  from "mongoose";

const isConected:{
    connected?:number
} = {}
const dbConnect  = async ()=>{
    try {
        if(isConected.connected){
            console.log("database is alredy connected");
            return ;
        }
        const mongoURL = process.env.MONGO_URL!
        const conn = await  mongoose.connect(mongoURL,{
            dbName:"codehire"
        })

        isConected.connected = conn.connection.readyState;
        console.log(`database connected: ${conn.connection.host}`)
    } catch (error) {
        isConected.connected=0;
        console.log("database conntection error:", error);
    }
}

export default dbConnect;