import jwt, { decode } from "jsonwebtoken";
import User from "../models/user_model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized- No token Provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized- Invalid token" });
    }

    /*kyuki humne controllers mein userId ka token banaya tha toh,abb token se userId decode
        kiya,then userId se user ko DB se dhund ke nikala,(sirf password field ko minus kr diya
        coz it wont be safe to return the password to the client)
        */
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in protectRoute middleware: ", error.message);
    res.status(500).send("Internal server error");
  }
};
