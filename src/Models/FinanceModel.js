import { pool } from "../Config/dbConexion.js";

export class FinanceModel {
  static async postIngreso(amount, user_id) {
    try {
      const [result] = await pool.execute(
        `
          INSERT INTO finance(amount, user_id) VALUES (?,?)
        `,
        [amount, user_id],
      );

      return result;
    } catch (error) {}
  }
}
