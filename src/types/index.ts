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
  parent?: Category;
  children?: Category[];
};

export type BookStatus = "IN_STOCK" | "OUT_OF_STOCK" | "INCOMING" | "ON_HOLD";

export type BookInfo = {
  id: number;
  name: string;
  price: number;
  discount?: number;
  supplier: string;
  thumbnail: string;
  authorsNames?: string[];
  gallery: string[];
  translator?: string;
  publisher?: string;
  publishYear?: string;
  language?: string;
  size: string;
  content: string;
  weight: string;
  formality: string;
  quantityInStock: number;
  status: BookStatus;
  genreNames: [];
};
