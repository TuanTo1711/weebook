import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { Category } from "~/types";

export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const response = await axios.get(
      "http://localhost:8080/api/v1/category/get-all",
    );

    const result = response.data as Category[];
    return result;
  }),
});
