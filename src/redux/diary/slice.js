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
      .addCase(addDiariesProductThunk.fulfilled, addProductFulfilled)
      .addCase(addDiariesProductThunk.rejected, rejected)

      .addCase(addDiaryExerciseThunk.pending, pending)
      .addCase(addDiaryExerciseThunk.fulfilled, addExerciseFulfilled)
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
  //state = { ...state, ...payload };
  state.burnedCalories = payload.burnedCalories;
  state.consumedCalories = payload.consumedCalories;
  state.consumedProducts = payload.consumedProducts;
  state.date = payload.date;
  state.doneExercises = payload.doneExercises;
  state.owner = payload.owner;
  state.timeSport = payload.timeSport;
}
function addProductFulfilled(state, { payload }) {
  console.log(payload, "addProductFulfilled");
}

function addExerciseFulfilled(state, { payload }) {
  console.log(payload, "addExerciseFulfilled");
}
export const diaryReducer = diarySlice.reducer;

// burnedCalories: 27416
// consumedCalories: 610
// consumedProducts: [{product: "5d51694902b2373622ff5cb8", amount: 200, calories: 610, _id: "64ef70f117b7535f9d3611af"}]
// createdAt: "2023-08-30T16:40:17.104Z"
// date: "30-08-2023"
// doneExercises: [{exercise: "64e5d7a0bc1733080d784344", time: 250, burnedCalories: 27416,…}]
// owner: "64e84b0291b684306fb7524d"
// timeSport: 250
// updatedAt: "2023-08-30T16:51:32.125Z"
// _id: "64ef70f117b7535f9d3611ae"
