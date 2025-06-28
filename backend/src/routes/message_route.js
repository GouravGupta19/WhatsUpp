import express from "express";
import { protectRoute } from "../middleware/auth_middleware.js";
import {
  getUsersForSidebar,
  getMessages,
  sendMessage,
} from "../controllers/message_controller.js";
const router = express.Router();

//to get the users for sidebar,with which the signed in user can chat
router.get("/users", protectRoute, getUsersForSidebar);

//to get all the messages between signed in user and the other user (with id given)
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessage);

export default router;
