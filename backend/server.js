import express from "express";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./db/connectdb.js";
import pkg from "body-parser";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
dotenv.config();
const { urlencoded } = pkg;
const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 5000;
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
  connectDB();
});
