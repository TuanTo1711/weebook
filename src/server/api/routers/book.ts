import axios from "axios";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { Page, BookInfo, ResultResponse } from "~/types";

export const bookRouter = createTRPCRouter({
  search: publicProcedure.input(z.string()).query(async ({ input }) => {
    const response = await axios.get(
      "http://localhost:8080/api/v1/book/search",
      {
        params: { q: input },
      },
    );

    const result = response.data as ResultResponse<Page<BookInfo>>;

    return result.data;
  }),
});
