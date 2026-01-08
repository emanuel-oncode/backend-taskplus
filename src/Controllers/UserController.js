import { UserModel } from "../Models/UserModel.js";
import bcrypt from "bcrypt";

export class UserController {
  static async getUsers(req, res) {
    try {
      const result = await UserModel.getUsers();

      res.json({ result });
    } catch (error) {}
  }

  static async getUserById(req, res) {
    const { _userId } = req.body;

    try {
      const result = await UserModel.getUser(_userId);

      if (result.length === 0) {
        return res.status(401).json({
          success: false,
          message: "The user with that ID was not found.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "user found successfully.",
        data: result,
      });
    } catch (error) {
      console.log(`Error in controller ${error}`);
    }
  }

  static async createUser(req, res) {
    const { userName, userLastName, userBirthdate, userEmail, userPassword } =
      req.body;

    try {
      const userExists = await UserModel.getUserByEmail(userEmail);

      if (userExists) {
        return res.status(404).json({
          success: false,
          message: "The email address is already registered.",
        });
      }

      const userPasswordHashed = await bcrypt.hash(userPassword, 10);

      console.log(req.body);

      const result = await UserModel.postUser(
        userName,
        userLastName,
        userBirthdate,
        userEmail,
        userPasswordHashed
      );

      res.status(201).json({
        success: true,
        message: "user created successfully",
        result,
      });
    } catch (error) {}
  }

  static async loginUser(req, res) {
    const { userEmail, userPassword } = req.body;
    try {
      const user = await UserModel.getUserByEmail(userEmail);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "No se encontro usuario registrado con este correo.",
        });
      }

      const passworIsTrue = await bcrypt.compare(
        userPassword,
        user.user_password
      );

      if (!passworIsTrue) {
        return res.status(404).json({
          success: false,
          message: "contraseña incorrecta",
        });
      }

      return res.status(201).json({
        success: true,
        message: "se inisio secion correctamente",
      });
    } catch (error) {}
  }
}
