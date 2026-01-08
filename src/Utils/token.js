import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../Config/env.config.js";

export const singToken = (user_id, user_email) => {
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

export const veryfiToken = (token) => {
  try {
    jwt.verify(token, JWT_SECRET_KEY);

    return true;
  } catch (error) {
    return false;
  }
};
