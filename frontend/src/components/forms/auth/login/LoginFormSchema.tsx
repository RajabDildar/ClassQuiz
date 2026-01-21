import * as z from "zod";

const LoginFormSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .max(100, { message: "Password must be at most 100 characters." }),
});

export default LoginFormSchema;
