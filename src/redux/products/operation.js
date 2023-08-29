import { createAsyncThunk } from "@reduxjs/toolkit"
import { getProductsCategories, getProductsList } from "@/services/privateAPI"

export const productCategoriesThunk = createAsyncThunk("products/categories", getProductsCategories)

export const productListThunk = createAsyncThunk("products/list", getProductsList)
