import { z } from "zod";

export const SignInSchema = z.object({
  username: z.string().min(2, { message: "Tên tài khoản không được bỏ trống" }),
  password: z.string().min(1, { message: "Mật khẩu không được bỏ trống" }),
});

export type SignInRequest = z.infer<typeof SignInSchema>;

export const SignUpSchema = z
  .object({
    firstName: z.string().min(2, { message: "Họ không được bỏ trống" }),
    lastName: z.string().min(2, { message: "Tên không được bỏ trống" }),
    email: z.string().email({ message: "Email address invalid" }),
    username: z
      .string()
      .min(2, { message: "Tên tài khoản không được bỏ trống" }),
    password: z
      .string()
      .min(6, { message: "Mật khẩu tối thiểu 6 kí tự" })
      .max(12, { message: "Mật khẩu tối đa 12 kí tự" }),
    confirm: z.string().min(1, { message: "Mật khẩu không được bỏ trống" }),
  })
  .required()
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export type SignUpRequest = z.infer<typeof SignUpSchema>;

export const VerifyEmailSchema = z.object({
  email: z.string().email({ message: "Email không được bỏ trống" }),
  code: z.string().min(4, { message: "Mã xác thực không được bỏ trống" }),
});
export type VerifyRequest = z.infer<typeof VerifyEmailSchema>;
