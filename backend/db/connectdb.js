import mongoose from "mongoose";
import dotevn from "dotenv";

const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected ${con.connection.host}`);
  } catch (error) {
    console.log(`error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
