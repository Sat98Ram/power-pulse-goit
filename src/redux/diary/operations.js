import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deletedDiaryExercise,
  deletedDiaryProduct,
  exerciseAddDiary,
  getDiariesByDate,
  productAddDiary,
} from "../../services/privateAPI";

export const getDiariesByDateThunk = createAsyncThunk(
  "diary/getByDate",
  getDiariesByDate
);
export const addDiariesProductThunk = createAsyncThunk(
  "diary/addProduct",
  productAddDiary
);
export const addDiaryExerciseThunk = createAsyncThunk(
  "diary/addExercise",
  exerciseAddDiary
);
export const deleteDiaryExerciseThunk = createAsyncThunk(
  "diary/deleteExercise",
  deletedDiaryExercise
);
export const deleteDiaryProductThunk = createAsyncThunk(
  "diary/deleteProduct",
  deletedDiaryProduct
);
