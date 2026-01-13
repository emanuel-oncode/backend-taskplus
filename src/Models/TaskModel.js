import { pool } from "../Config/dbConexion.js";
import { v4 as uuidv4 } from "uuid";

export class TaskModel {
  static async createTask(
    task_title,
    task_description,
    task_completed,
    user_id
  ) {
    // task_id CHAR(32) PRIMARY KEY,
    // task_title VARCHAR(200) NOT NULL,
    // task_description TEXT,
    // task_completed BOOLEAN DEFAULT FALSE,
    // task_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    // user_id CHAR(32) NOT NULL,

    try {
      const task_id = uuidv4().replace(/-/g, "");

      const [result] = await pool.execute(
        `
          INSERT INTO task (task_id, task_title, task_description, task_completed, user_id) WHERE (?,?,?,?,?)
        `,
        [task_id, task_title, task_description, task_completed, user_id]
      );

      return result;
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  static async getTask(user_id) {
    try {
      const [result] = await pool.execute(
        `
          SELECT * FROM task WHERE user_id = ?
        `,
        [user_id]
      );

      if (result.length === 0) return [];

      return result[0];
    } catch (error) {
      console.error("Error: ", error);
    }
  }
}
