import { pool } from "../Config/dbConexion.js";
import { v4 as uuidv4 } from "uuid";

//? CREATE TABLE finance (
//?     finance_id CHAR(32) PRIMARY KEY,
//?     user_id CHAR(32) NOT NULL REFERENCES user(user_id),
//!     finance_type VARCHAR(10) CHECK (finance_type IN ('income', 'exit')),
//?     amount DECIMAL(15, 2) NOT NULL,
//?     finance_description TEXT,
//?     finance_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//? );

export class FinanceModel {
  static async postFinance(amount, user_id, finance_type, finance_description) {
    const finance_id = uuidv4().replace(/-/g, "");
    try {
      const [result] = await pool.execute(
        `
          INSERT INTO finance(finance_id, amount, user_id, finance_type, finance_description) VALUES (?,?,?,?,?)
        `,
        [finance_id, amount, user_id, finance_type, finance_description],
      );

      return result;
    } catch (error) {
      console.error("Error al crear una finanza:", error);

      throw error;
    }
  }

  static async getFinance(user_id, finance_type) {
    try {
      const [result] = await pool.execute(
        `
          SELECT * FROM finance WHERE user_id = ? AND finance_type = ?
        `,
        [user_id, finance_type],
      );

      return result;
    } catch (error) {
      console.error("Error al obtener finanzas:", error);

      throw error;
    }
  }
}
