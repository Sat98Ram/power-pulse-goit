import { createSlice } from "@reduxjs/toolkit";
import { productCategoriesThunk } from "./operation";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    categories: [],
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(productCategoriesThunk.pending, pending)
      .addCase(productCategoriesThunk.fulfilled, categoriesFulfilled)
      .addCase(productCategoriesThunk.rejected, rejected),
});

function pending(state) {
  state.isLoading = true;
}

function rejected(state) {
  state.isLoading = false;
}

function categoriesFulfilled(state, { payload }) {
  state.isLoading = false;
  state.categories = payload;
}

export const productsReducer = productSlice.reducer;
