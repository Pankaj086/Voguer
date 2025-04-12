import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected")
        })
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`)
        // console.log(`MongoDB connected: ${conn.connection.host}`)
    }
    catch(err){
        console.error("MongoDB connection error:", err.message)
        // what is process.exit(1) doing here?
        // It terminates the process with a failure code (1) indicating that the process exited due to an error.
        // This is useful in scenarios where you want to ensure that the application does not continue running in an unstable state.
        process.exit(1);
    }
}

export default connectDB;