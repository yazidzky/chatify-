import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

app.listen(3000, () => console.log("Server running  on port:" + PORT));
