import { verifyToken } from "../../Utils/token.js";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Token not provided",
    });
  }

  const token = authHeader.split(" ")[1]; // Bearer TOKEN

  try {
    const decoded = verifyToken(token);

    req.user = decoded; // 🔥 guardamos usuario
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
