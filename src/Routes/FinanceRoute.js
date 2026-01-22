import { Router } from "express";
import { authMiddleware } from "../Middleware/auth/authMiddleware.js";
import { FinanceController } from "../Controllers/FinanceController.js";

export const financeRoute = Router();

financeRoute.get("/", authMiddleware, FinanceController.getFinanceType);
financeRoute.post("/", authMiddleware, FinanceController.newIngresoByUser);
