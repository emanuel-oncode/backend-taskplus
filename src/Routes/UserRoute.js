import { Router } from "express";

import { UserController } from "../Models/UserController.js";
import { validateSchema } from "../Middleware/validateSchema.js";
import { userSchema } from "../Schemas/userSchema.js";

export const userRoute = Router();

userRoute.get("/", (req, res) => {
  res.json({ message: "User API" });
});

userRoute.post("/", UserController.postUser);
