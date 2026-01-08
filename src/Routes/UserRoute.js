import { Router } from "express";

import { UserController } from "../Controllers/UserController.js";
import { validateInputs } from "../Middleware/validateInputs.js";
import { authMiddleware } from "../Middleware/auth/authMiddleware.js";

export const userRoute = Router();

// TODO: Este endpoind debe ser borrado!!
userRoute.get("/", UserController.getUsers);

userRoute.post("/register", validateInputs, UserController.createUser);

userRoute.post("/login", UserController.loginUser);

// TODO: create protected routes
userRoute.get("/protegida", authMiddleware, (req, res) => {
  res.json({ message: "ruta protegida" });
});
