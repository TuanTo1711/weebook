import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.username}`,
      };
    }),

  signIn: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      return input;
    }),
});
