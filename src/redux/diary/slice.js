import { createSlice } from "@reduxjs/toolkit";
import {
  addDiariesProductThunk,
  addDiaryExerciseThunk,
  deleteDiaryExerciseThunk,
  deleteDiaryProductThunk,
  getDiariesByDateThunk,
} from "./operations";

export const diarySlice = createSlice({
  name: "diary",
  initialState: {
    burnedCalories: null,
    consumedCalories: null,
    consumedProducts: [],
    createdAt: null,
    date: null,
    doneExercises: [],
    owner: null,
    timeSport: null,
    updatedAt: null,
    _id: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDiariesByDateThunk.pending, pending)
      .addCase(getDiariesByDateThunk.fulfilled, getDiaryFulfilled)
      .addCase(getDiariesByDateThunk.rejected, getDiaryRejected)

      .addCase(addDiariesProductThunk.pending, pending)
      .addCase(addDiariesProductThunk.fulfilled, getDiaryFulfilled)
      .addCase(addDiariesProductThunk.rejected, rejected)

      .addCase(addDiaryExerciseThunk.pending, pending)
      .addCase(addDiaryExerciseThunk.fulfilled, getDiaryFulfilled)
      .addCase(addDiaryExerciseThunk.rejected, rejected)

      .addCase(deleteDiaryExerciseThunk.pending, pending)
      .addCase(deleteDiaryExerciseThunk.fulfilled, deleteProductFulfilled)

      .addCase(deleteDiaryProductThunk.pending, pending)
      .addCase(deleteDiaryProductThunk.fulfilled, deleteExerciseFulfilled)
      .addCase(deleteDiaryProductThunk.rejected, rejected),
});
function pending(state) {
  state.isLoading = true;
}
function rejected(state) {
  state.isLoading = false;
}
function getDiaryRejected(state) {
  state.burnedCalories = 0;
  state.consumedCalories = 0;
  state.consumedProducts = [];
  state.createdAt = null;
  state.date = null;
  state.doneExercises = [];
  state.owner = null;
  state.timeSport = null;
  state.updatedAt = null;
  state._id = null;
  state.isLoading = false;
}

function getDiaryFulfilled(state, { payload }) {
  if (payload === null) {
    state.consumedCalories = 0;
    state.burnedCalories = 0;
    state.consumedProducts = [];
    state.createdAt = null;
    state.date = null;
    state.doneExercises = [];
    state.owner = null;
    state.timeSport = null;
    state.updatedAt = null;
    state._id = null;
    state.isLoading = false;

    return;
  }

  state.burnedCalories = payload.burnedCalories;
  state.consumedCalories = payload.consumedCalories;
  state.consumedProducts = payload.consumedProducts;
  state.date = payload.date;
  state.doneExercises = payload.doneExercises;
  state.owner = payload.owner;
  state.timeSport = payload.timeSport;
}

function deleteProductFulfilled(state, { payload }) {
  console.log(payload);
}

function deleteExerciseFulfilled(state, { payload }) {
  console.log("deleteExerciseFulfilled", payload);
  console.log(payload);
}

export const diaryReducer = diarySlice.reducer;
