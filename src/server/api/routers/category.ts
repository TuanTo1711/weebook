import axios from "axios";
import { env } from "~/env.mjs";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { Category } from "~/types";

export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const response = await axios.get(`${env.BASE_API_URL}/category/get-all`);

    const result = response.data as Category[];
    return result;
  }),
});
