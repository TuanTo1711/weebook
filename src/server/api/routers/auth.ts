import axios from "axios";
import { env } from "~/env.mjs";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { ResultResponse, UserInfo } from "~/types";
import {
  SignInSchema,
  SignUpSchema,
  VerifyEmailSchema,
} from "~/types/validator";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure.input(SignUpSchema).mutation(async ({ input }) => {
    const response = await axios.post(
      `${env.BASE_API_URL}/auth/sign-up`,
      input,
    );

    const data = response.data as ResultResponse<{
      userInfo: UserInfo;
    }>;

    return data.data;
  }),

  signIn: publicProcedure.input(SignInSchema).mutation(async (opts) => {
    const { input, ctx } = opts;
    ctx.headers.delete("Authorization");
    const response = await axios.post(
      `${env.BASE_API_URL}/auth/sign-in`,
      input,
    );

    const data = response.data as ResultResponse<{
      userInfo: UserInfo;
      accessToken: string;
    }>;

    if (!data) {
      return null;
    }

    ctx.headers.set("Authorization", `Bearer ${data.data.accessToken}`);
    const userInfo = data.data.userInfo;
    return userInfo;
  }),

  verifyEmail: publicProcedure
    .input(VerifyEmailSchema)
    .mutation(async ({ input }) => {
      const response = await axios.post(
        `${env.BASE_API_URL}/otp/verify-otp`,
        input,
      );
      return response.data as string;
    }),
});
