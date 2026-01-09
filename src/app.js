import express from "express";
import { userRoute } from "./Routes/UserRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:4321",
    credentials: true,
  })
);

app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "The API is working" });
});
