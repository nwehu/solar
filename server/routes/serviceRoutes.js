import express from "express";
import {
  createService,
  getServices,
  deleteService,
} from "../controllers/serviceController.js";

const router = express.Router();

// Create a service
router.post("/service", createService);

// Get all services
router.get("/services", getServices);

// Delete a service
router.delete("/service/:id", deleteService);

export default router;