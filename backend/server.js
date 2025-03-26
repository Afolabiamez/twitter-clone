import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./db/connectdb.js";
import pkg from "body-parser";
import cookieParser from "cookie-parser";

const { urlencoded } = pkg;
dotenv.config();
const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 5000;
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
  connectDB();
});
