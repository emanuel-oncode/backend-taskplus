import { pool } from "../Config/dbConexion.js";
import { v4 as uuidv4 } from "uuid";

export class UserModel {
  static async getUsers() {
    try {
      const [result] = await pool.execute("SELECT * FROM user");

      return result;
    } catch (error) {
      // TODO: Add Errors
    }
  }

  static async getUser(userId) {
    try {
      const [result] = await pool.execute(
        `SELECT * FROM user WHERE user_id = ?`,
        [userId]
      );

      if (result.length === 0) return [];

      return result[0];
    } catch (error) {
      console.error("Error get a user in the database ", error);
    }
  }

  static async getUserByEmail(email) {
    try {
      const [result] = await pool.execute(
        `SELECT user_id, user_email, user_name, user_last_name, user_password FROM user WHERE user_email = ? LIMIT 1`,
        [email]
      );

      if (result.length === 0) return null;

      return result[0];
    } catch (error) {
      if (error.code === "ER_BAD_FIELD_ERROR") {
        throw new Error("Error en la consulta SQL: campo inexistente");
      }

      throw new Error("Error interno del servidor");
    }
  }

  static async postUser(
    userName,
    userLastName,
    userBirthdate,
    userEmail,
    userPassword
  ) {
    const userId = uuidv4().replace(/-/g, "");

    try {
      const [result] = await pool.execute(
        `INSERT INTO user(user_id, user_name, user_last_name, user_birthdate, user_email, user_password) VALUES (?,?,?,?,?,?)`,
        [userId, userName, userLastName, userBirthdate, userEmail, userPassword]
      );

      return result;
    } catch (error) {
      console.error("Error creating a user in the database ", error);
    }
  }
}
