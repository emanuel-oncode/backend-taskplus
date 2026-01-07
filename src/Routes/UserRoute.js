import { Router } from "express";

import { UserController } from "../Controllers/UserController.js";

export const userRoute = Router();

userRoute.get("/", UserController.getUsers);
userRoute.get("/userById", UserController.getUserById);

userRoute.post("/", UserController.createUser);
