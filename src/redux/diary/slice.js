import { createSlice } from "@reduxjs/toolkit";
import {
  addDiariesProductThunk,
  addDiaryExerciseThunk,
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
      .addCase(addDiaryExerciseThunk.rejected, rejected),
});
function pending(state) {
  state.isLoading = true;
}
function rejected(state) {
  state.isLoading = false;
}
function getDiaryRejected(state) {
  (state.burnedCalories = 0),
    (state.consumedCalories = 0),
    (state.consumedProducts = []),
    (state.createdAt = null),
    (state.date = null),
    (state.doneExercises = []),
    (state.owner = null),
    (state.timeSport = null),
    (state.updatedAt = null),
    (state._id = null),
    (state.isLoading = false);
}

function getDiaryFulfilled(state, { payload }) {
  state.burnedCalories = payload.burnedCalories;
  state.consumedCalories = payload.consumedCalories;
  state.consumedProducts = payload.consumedProducts;
  state.date = payload.date;
  state.doneExercises = payload.doneExercises;
  state.owner = payload.owner;
  state.timeSport = payload.timeSport;
}

export const diaryReducer = diarySlice.reducer;
