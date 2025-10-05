import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.json({ success: false, message: "Not authorized, Login Again" });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // get user
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // attach user to req
    req.user = user;          // full user object
    req.userId = decoded.id;  // id bhi separately

    next();
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export default userAuth;
