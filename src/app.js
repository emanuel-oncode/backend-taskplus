import express from "express";
import { userRoute } from "./Routes/UserRoute.js";
import { taskRoute } from "./Routes/TaskRoute.js";
import { financeRoute } from "./Routes/FinanceRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:4321",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Set-Cookie"],
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoute);
app.use("/user/task", taskRoute);
app.use("/user/finance", financeRoute);

app.get("/", (req, res) => {
  res.status(200).json({ message: "The API is working" });
});
