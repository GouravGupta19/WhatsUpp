import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// Load environment variables from .env file
const MONGO_URL = process.env.MONGO_URL;

export const connectDB = async () => {
  try {
    const conn= await mongoose.connect(MONGO_URL);
    console.log(`Connected to DB: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to DB:", error);
  }
};
