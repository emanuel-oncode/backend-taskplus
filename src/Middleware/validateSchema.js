import { ZodError } from "zod";

export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        status: "error",
        errors: error.errors.map((e) => ({
          field: e.path[1],
          message: e.message,
        })),
      });
    }
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};
