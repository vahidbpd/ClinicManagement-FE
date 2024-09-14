import { z } from "zod";

export const loginSchema = z.object({
  userName: z.string().min(1, { message: "نام کاربری الزامی است" }),
  password: z.string().min(1, { message: "رمز عبور الزامی است" }),
});
