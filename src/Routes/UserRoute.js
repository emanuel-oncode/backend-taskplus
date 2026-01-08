import { Router } from "express";

import { UserController } from "../Controllers/UserController.js";
import { validateUser } from "../Middleware/validateUser.js";

export const userRoute = Router();

userRoute.get("/", UserController.getUsers);

userRoute.post("/register", validateUser, UserController.createUser);

userRoute.post("/login", UserController.loginUser);
