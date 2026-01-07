import { UserModel } from "../Models/UserModel.js";
import bcrypt from "bcrypt";

export class UserController {
  static async createUser(req, res) {
    const { userName, userLastName, userBirthdate, userEmail, userPassword } =
      req.body;

    try {
      const userPasswordHashed = bcrypt.hash(userPassword, 10);

      const result = await UserModel.postUser(
        userName,
        userLastName,
        userBirthdate,
        userEmail,
        userPasswordHashed
      );
    } catch (error) {}
  }
}
