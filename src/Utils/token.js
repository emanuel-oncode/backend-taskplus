import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../Config/env.config.js";

export const signToken = (user_id, user_email) => {
  console.log("Generando token con:", { user_id, user_email });
  const token = jwt.sign(
    {
      id: user_id,
      email: user_email,
    },
    JWT_SECRET_KEY,
    {
      expiresIn: "2h",
    }
  );

  return token;
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    return decoded;
  } catch (error) {
    return null;
  }
};
