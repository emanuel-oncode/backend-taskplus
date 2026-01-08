export function validateEmail(email) {
  if (!email) return { ok: false, message: "Email is required" };

  if (!email.includes("@")) return { ok: false, message: `Must include an @` };

  if (!email.includes(".")) return { ok: false, message: `Must include an .` };

  return { ok: true, message: "Everything is fine." };
}

export function validatePasssword(password) {
  if (!password) return { ok: false, message: "Password is required" };

  if (password.lenght < 8) {
    return {
      ok: false,
      message: `The password must be at least 8 digits long.`,
    };
  }

  return { ok: true, message: "Everything is fine." };
}

export function validateName(name) {
  console.log(name.lenght);
  if (!name)
    return {
      ok: false,
      message: "Name is required",
    };

  if (name.lenght < 3)
    return {
      ok: false,
      message: "The name must have 3 or more characters",
    };

  return { ok: true, message: "Everything is fine." };
}
