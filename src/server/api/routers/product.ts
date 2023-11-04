import axios from "axios";
import qs from "qs";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { Page, ProductInfo, ResultResponse } from "~/types";

import { paginationSchema } from "~/types";

export const productRouter = createTRPCRouter({
  search: publicProcedure.input(z.string()).query(async ({ input }) => {
    const response = await axios.get(
      "http://localhost:8080/api/v1/product/search",
      {
        params: { q: input },
      },
    );

    const result = response.data as ResultResponse<Page<ProductInfo>>;

    return result.data;
  }),
  getAll: publicProcedure
    .input(
      z.object({
        params: paginationSchema,
        category: z.string().optional(),
      }),
    )
    .query(async ({ input }) => {
      const query = { ...input.params, category: input.category };
      const response = await axios.get(
        "http://localhost:8080/api/v1/product/find-all-by?" +
          qs.stringify(query, { allowDots: true }),
      );

      const data = response.data as Page<ProductInfo>;
      return data;
    }),
  getByName: publicProcedure.input(z.string()).query(async ({ input }) => {
    const response = await axios.get(
      "http://localhost:8080/api/v1/product/get-by-name?" +
        qs.stringify({ name: input }, { allowDots: true }),
    );

    const productInfo = response.data as ProductInfo;
    return productInfo;
  }),
});
