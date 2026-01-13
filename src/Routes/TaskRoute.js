import { Router } from "express";
import { authMiddleware } from "../Middleware/auth/authMiddleware.js";
import { TaskController } from "../Controllers/TaskController.js";

export const taskRoute = Router();

taskRoute.get("/", (req, res) => {
  res.json({ task: "task" });
});
taskRoute.post("/createTask", authMiddleware, TaskController.createNewTask);
