import { TaskModel } from "../Models/TaskModel.js";

export class TaskController {
  static async createNewTask(req, res) {
    const user_id = req.session.user_id;
    const { task_title, task_description, task_completed } = req.body;

    try {
      const result = await TaskModel.createTask(
        task_title,
        task_description,
        task_completed,
        user_id
      );

      if (!result) {
        return res.status(400).json({
          success: false,
          message: "No se pudo crear la tarea",
        });
      }

      return res.status(201).json({
        success: true,
        message: "Se crea lo tarea de forma exitosa",
        result,
      });
    } catch (error) {}
  }
}
