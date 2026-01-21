import * as z from "zod";

const SignupFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters." })
    .max(32, { message: "Full name must be at most 32 characters." }),
  email: z.email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(100, { message: "Password must be at most 100 characters." }),
  role: z.enum(["teacher", "student"], {
    message: "You must select your role.",
  }),
});

export default SignupFormSchema;
