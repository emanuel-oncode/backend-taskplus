import express from "express";
import { userRoute } from "./Routes/UserRoute.js";

export const app = express();

app.use(express.json());

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "The API is working" });
});
