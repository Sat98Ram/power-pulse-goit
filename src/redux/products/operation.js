import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductsCategories } from "@/services/privateAPI";

export const productCategoriesThunk = createAsyncThunk(
  "products/categories",
  getProductsCategories
);
