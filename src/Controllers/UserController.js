import { UserModel } from "../Models/UserModel";

export class UserController {
  static async createUser(req, res) {
    const { userName, userLastName, userBirthdate, userEmail, userPassword } =
      req.body;

    try {
      const result = await UserModel.postUser();
    } catch (error) {}
  }
}
