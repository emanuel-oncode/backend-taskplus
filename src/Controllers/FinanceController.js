import { FinanceModel } from "../Models/FinanceModel.js";

export class FinanceController {
  static async newIngresoByUser(req, res) {
    const user_id = req.user.id;
    const { amount, finance_type, finance_description } = req.body;
    try {
      if (
        !(
          finance_type.toLowerCase() === "income" ||
          finance_type.toLowerCase() === "exit"
        )
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Error tipo de ingreso incorrecto, deve ingresar 'income o exit'",
        });
      }

      const result = await FinanceModel.postFinance(
        amount,
        user_id,
        finance_type,
        finance_description,
      );

      return res.status(201).json({
        success: true,
        result,
      });
    } catch (error) {
      console.error("Error en el controlador: ", error);

      throw error;
    }
  }

  static async getFinanceType(req, res) {
    const user_id = req.user.id;
    const { finance_type } = req.body;

    try {
      if (
        !(
          finance_type.toLowerCase() === "income" ||
          finance_type.toLowerCase() === "exit"
        )
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Error tipo de ingreso incorrecto, deve ingresar 'income o exit'",
        });
      }

      const result = await FinanceModel.getFinance(user_id, finance_type);

      return res.status(201).json({
        success: true,
        message: `${finance_type} añadido`,
        result,
      });
    } catch (error) {
      console.error("Error en el controlador: ", error);

      throw error;
    }
  }
}
