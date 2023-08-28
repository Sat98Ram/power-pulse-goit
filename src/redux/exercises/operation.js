import { createAsyncThunk } from "@reduxjs/toolkit";
import { getExerciseList, getExercisesCategories } from "@/services/privateAPI";

export const exerciseListThunk = createAsyncThunk(
  "exercise/list",
  getExerciseList
);
export const exerciseCategoriesThunk = createAsyncThunk(
  "exercise/categories",
  getExercisesCategories
);
