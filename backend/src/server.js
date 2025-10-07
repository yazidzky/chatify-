import express from "express";
import path from "path";
import authRoute from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";

const app = express();
const _dirname = path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
  connectDB();
});
