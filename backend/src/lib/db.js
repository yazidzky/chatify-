import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = ENV;
    if (!MONGO_URI) throw new Error("MONGO_URI is not defined");
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("Mongodb connected:", conn.connection.host);
  } catch (error) {
    console.log("eror connection to mongoDB :", error);
    process.exit(1);
  }
};
