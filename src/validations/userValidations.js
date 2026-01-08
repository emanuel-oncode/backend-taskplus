export function validateEmail(email) {
  let objetMessage = { ok: true, message: "Everything is fine." };

  if (!email) objetMessage = { ok: false, message: "Email is required" };

  if (!email.includes("@"))
    objetMessage = { ok: false, message: `Must include an "@"` };

  if (!email.includes("."))
    objetMessage = { ok: false, message: `Must include an "."` };

  return objetMessage;
}

export function validatePasssword(password) {
  let objetMessage = { ok: true, message: "Everything is fine." };

  if (!password) objetMessage = { ok: false, message: "Password is required" };

  if (password.lenght < 8) {
    objetMessage = {
      ok: false,
      message: `The password must be at least 8 digits long.`,
    };
  }

  return objetMessage;
}

export function validateName(name) {
  let objetMessage = { ok: true, message: "Everything is fine." };

  if (!name.lenght > 3)
    return (objetMessage = {
      ok: false,
      message: "The name must have 3 or more characters",
    });

  return objetMessage;
}
