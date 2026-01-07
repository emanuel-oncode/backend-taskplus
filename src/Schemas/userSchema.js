export class UserSchema {
  static validationEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let message = { success: false, message: "error invalid email" };

    if (regex.test(email)) {
      message = { success: true, message: "valid email" };
    }

    return message;
  }
}
