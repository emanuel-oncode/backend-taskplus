import { Router } from "express";

import { UserController } from "../Controllers/UserController.js";
import { validateUser } from "../Middleware/validateUser.js";
import { authMiddleware } from "../Middleware/auth/authMiddleware.js";

export const userRoute = Router();

userRoute.get("/", UserController.getUsers);

userRoute.post("/register", validateUser, UserController.createUser);

userRoute.post("/login", UserController.loginUser);

// TODO: create protected routes
userRoute.get("/protegida", authMiddleware, (req, res) => {
  res.json({ message: "ruta protegida" });
});
