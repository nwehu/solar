import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://jayshree9337_db_user:OqqNbgUHaQq7nZ6D@ac-s0j66ux-shard-00-00.rzo7ovw.mongodb.net:27017,ac-s0j66ux-shard-00-01.rzo7ovw.mongodb.net:27017,ac-s0j66ux-shard-00-02.rzo7ovw.mongodb.net:27017/?ssl=true&replicaSet=atlas-749hnu-shard-0&authSource=admin&appName=Cluster0");

    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌", error.message);
    process.exit(1);
  }
};

export default connectDB;