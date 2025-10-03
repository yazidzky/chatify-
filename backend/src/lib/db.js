import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb connected:", conn.connection.host);
  } catch (error) {
    console.log("eror connection to mongoDB :", error);
    process.exit(1);
  }
};
