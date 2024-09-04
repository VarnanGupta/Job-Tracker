import mongoose from "mongoose";

const DbCon = async()=>{
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB-Tracker")
    }catch(error){
        console.log('error in MondoDb connection',error)
    }
}


export default DbCon