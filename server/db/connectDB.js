import mongoose from "mongoose";

const connectDB = async (DATABASE_URI) => {
    try{
        await mongoose.connect(DATABASE_URI);
        console.log("MongoDB conectado ...")

    } catch (error) {
        console.log(error);
    }
};

export { connectDB }