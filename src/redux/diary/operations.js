import { createAsyncThunk } from "@reduxjs/toolkit";
import {
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
