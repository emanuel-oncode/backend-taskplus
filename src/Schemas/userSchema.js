import { z } from "zod";

// Scheme validation User
export const userSchema = z.object({
  body: z.object({
    userNmae: z
      .object({
        required_error: "Name is required",
      })
      .min(3, "The name must be at least 3 characters long"),
    userLastName: z
      .object({
        required_error: "Last name is required",
      })
      .min(3, "The surname must have at least 3 characters"),
    userEmail: z.string().email("It must be a valid email address."),
    userBirthdate: z.string().date(),
    userPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(100, { message: "Password is too long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character",
      }),
  }),
});
