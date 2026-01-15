import { TaskModel } from "../Models/TaskModel.js";

export class TaskController {
  static async getTaskUser(req, res) {
    const user_id = req.user.id;

    console.log("user id desde el controlador getTaskUser:", user_id);
    try {
      const result = await TaskModel.getTask(user_id);

      if (!result) {
        return res.status(200).json({
          success: false,
          message: "No hay tareas creadas",
        });
      }

      return res.status(200).json({
        success: true,
        message: "exito",
        tasks: result,
      });
    } catch (error) {}
  }

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

  static async toggleCompleted(req, res) {
    const user_id = req.user.id;
    const { task_id } = req.body;

    console.log("toggel userid: ", user_id);
    try {
      const result = await TaskModel.toggleTaskCompleted(task_id, user_id);

      if (!result) {
        return res.status(404).json({
          success: false,
          message: "Tarea no encontrada",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Estado cambiado exitosamente",
      });
    } catch (error) {}
  }
}
