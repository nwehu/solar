import express from "express";
import {
  createContact,
  getContacts,
  deleteContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", createContact);
router.get("/contacts", getContacts);
router.delete("/contact/:id", deleteContact);

export default router;