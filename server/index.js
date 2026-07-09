import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js"
import serviceRoutes from "./routes/serviceRoutes.js";

dotenv.config();

console.log(process.env.MONGO_URI);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",contactRoutes);
app.use("/api", serviceRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running Successfully 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});