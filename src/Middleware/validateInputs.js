import {
  validateEmail,
  validateName,
  validatePasssword,
} from "../Utils/userValidations.js";

// TODO: Validacion de fecha!
export function validateInputs(req, res, next) {
  const { userName, userEmail, userPassword } = req.body;

  const emailIsValid = validateEmail(userEmail);
  console.log();
  if (!emailIsValid.ok) {
    return res.status(400).json({
      success: false,
      message: emailIsValid.message,
    });
  }

  const nameIsValid = validateName(userName);
  if (!nameIsValid.ok) {
    return res.status(400).json({
      success: false,
      message: nameIsValid.message,
    });
  }

  const passwordIsValid = validatePasssword(userPassword);
  if (!passwordIsValid.ok) {
    return res.status(400).json({
      success: false,
      message: passwordIsValid.message,
    });
  }

  next();
}
