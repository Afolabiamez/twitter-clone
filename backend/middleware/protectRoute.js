import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      res.status(401).json({ message: "You Need To login First || No Token" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      res.status(401).json({ message: "Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      res.status(404).json({ error: "User Not Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in ProtectRoute middleware", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
