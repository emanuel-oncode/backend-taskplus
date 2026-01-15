import { verifyToken } from "../../Utils/token.js";

export const authMiddleware = (req, res, next) => {
  // Intentar obtener el token de cookies primero
  let token = req.cookies.token;

  // Si no está en cookies, buscar en el header Authorization
  if (!token) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      token = authHeader.split(" ")[1];
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Token not provided",
    });
  }

  try {
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      });
    }

    // 🔥 IMPORTANTE: Asignar el usuario decodificado
    req.user = decoded;

    console.log("Usuario autenticado:", req.user); // Debug

    next();
  } catch (error) {
    console.error("Error en authMiddleware:", error);
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
