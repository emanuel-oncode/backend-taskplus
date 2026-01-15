import { Router } from "express";
import { authMiddleware } from "../Middleware/auth/authMiddleware.js";
import { TaskController } from "../Controllers/TaskController.js";

export const taskRoute = Router();

taskRoute.get("/", authMiddleware, TaskController.getTaskUser);
taskRoute.post("/createTask", authMiddleware, TaskController.createNewTask);
taskRoute.patch("/", authMiddleware, TaskController.toggleCompleted);
taskRoute.delete("/", authMiddleware, TaskController.delatedTask);
