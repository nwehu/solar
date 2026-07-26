import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const hashedPassword = await bcrypt.hash("jessi933", 10);

const admin = new Admin({
  username: "admin",
  password: hashedPassword,
});

await admin.save();

console.log("✅ Admin created successfully!");

process.exit();