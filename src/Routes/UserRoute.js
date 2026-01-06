import { Router } from "express";

import { UserModel } from "../Models/UserModel.js";
import { validateSchema } from "../Middleware/validateSchema.js";
import { userSchema } from "../Schemas/userSchema.js";

export const userRoute = Router();

userRoute.get("/", (req, res) => {
  res.json({ message: "User API" });
});

userRoute.post("/", validateSchema(userSchema), UserModel.postUser);
