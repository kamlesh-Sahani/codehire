import mongoose from "mongoose";

const isConnected:{
    connected?:number;
} = {};

async function dbConnect() {
    if(isConnected.connected){
        console.log("databse is already conntected");
        return;
    }

    const conn = await mongoose.connect(process.env.MONGO_URL!,{
        dbName:"codehire"
    });

    isConnected.connected = conn.connections[0].readyState;
    console.log(`database connected successfuly: ${conn.connection.host}`)
}
export default dbConnect;