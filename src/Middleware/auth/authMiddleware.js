import { veryfiToken } from "../../Utils/token.js";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.auth_token;
  const validateToken = veryfiToken(token);

  if (validateToken) {
    next();
  }

  return res.status(401).json({
    success: false,
    message: "Not validate token",
  });
};
