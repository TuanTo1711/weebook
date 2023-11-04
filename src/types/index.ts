import { z } from "zod";

export type Page<T> = {
  content: T[];
  totalPages: number;
};

export type ResultResponse<T> = {
  status: number;
  message: string;
  data: T;
};

export type Category = {
  id: number;
  name: string;
  children?: Category[];
};

const reviewSchema = z.object({
  id: z.number(),
  userId: z.number(),
  product: z.number(),
  user: z.number(),
  rating: z.number(),
  comment: z.string(),
  createdAt: z.string(),
});

const productInfoSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  discount: z.number(),
  thumbnail: z.string(),
  productCode: z.string(),
  supplierName: z.string().nullable(),
  weight: z.number(),
  packageSize: z.string(),
  content: z.string(),
  publisher: z.string(),
  publishYear: z.string(),
  translator: z.string().nullable(),
  language: z.string(),
  chapter: z.string(),
  pageNumber: z.number(),
  brand: z.string().nullable(),
  origin: z.string().nullable(),
  madeIn: z.string().nullable(),
  color: z.string().nullable(),
  material: z.string().nullable(),
  formality: z.string(),
  quantity: z.number(),
  estimatedDate: z.string().nullable(),
  status: z.string(),
  authors: z.array(z.string()),
  genres: z.array(z.string()),
  images: z.array(z.string()),
  reviews: z.array(reviewSchema),
});

const userInfoSchema = z.object({
  username: z.string(),
  email: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.boolean(),
  birthday: z.string(),
  avatarUrl: z.string(),
});

const filterSchema = z.object({
  field: z.string(),
  value: z.string(),
  type: z.string(),
});

export const paginationSchema = z.object({
  pageSize: z.string().optional(),
  pageNumber: z.string().optional(),
  sortBy: z.string().optional(),
  sortType: z.string().optional(),
  filters: z.array(filterSchema).optional().nullable(),
});

export type ProductInfo = z.infer<typeof productInfoSchema>;
export type UserInfo = z.infer<typeof userInfoSchema>;
export type Review = z.infer<typeof reviewSchema>;

export type PaginationParams = z.infer<typeof paginationSchema>;
export type Filter = z.infer<typeof filterSchema>;
