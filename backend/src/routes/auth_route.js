import express from "express";
import {
  login,
  logout,
  signup,
  updateProfile,
  checkAuth,
} from "../controllers/auth_controller.js";
import { protectRoute } from "../middleware/auth_middleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

//to update the profile pic,the user needs to be authenticated,thus for authentication purposes
//we are adding a middleware here
router.put("/update-profile", protectRoute, updateProfile);

//to check if the user is authenticated or not,depending on that we will redirect the user to,login page or not
router.get("/check", protectRoute, checkAuth);

export default router;
