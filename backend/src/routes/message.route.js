import express from "express";
import {
  getAllContacts,
  getMassagesByUserId,
  sendMessage,
  getChatPartners,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();
router.use(arcjetProtection, protectRoute);

router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMassagesByUserId);
router.post("/send/:id", sendMessage);

export default router;
