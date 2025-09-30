import express from "express";
const route = express.Router();

route.get("/send", (req, res) => {
  res.send("Messages endpoint");
});
export default route;
