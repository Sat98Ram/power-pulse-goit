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
      .addCase(addDiariesProductThunk.fulfilled, addDiaryFulfilled)
      .addCase(addDiariesProductThunk.rejected, rejected)

      .addCase(addDiaryExerciseThunk.pending, pending)
      .addCase(addDiaryExerciseThunk.fulfilled, addDiaryFulfilled)
      .addCase(addDiaryExerciseThunk.rejected, rejected)

      .addCase(deleteDiaryExerciseThunk.pending, pending)
      .addCase(deleteDiaryExerciseThunk.fulfilled, deleteFulfilled)
      .addCase(deleteDiaryExerciseThunk.rejected, rejected)

      .addCase(deleteDiaryProductThunk.pending, pending)
      .addCase(deleteDiaryProductThunk.fulfilled, deleteFulfilled)
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
function addDiaryFulfilled(state, { payload }) {
  const { newProduct, newExercise } = payload;

  if (newProduct) {
    const newElement = {
      ...payload.consumedProducts.pop(),
      product: payload.newProduct,
    };
    state.consumedProducts = [...state.consumedProducts, newElement];
  }
  if (newExercise) {
    const newElement = {
      ...payload.doneExercises.pop(),
      exercise: payload.newExercise,
    };
  
    state.doneExercises = [...state.doneExercises, newElement];
  }
  state.burnedCalories = payload.burnedCalories;
  state.consumedCalories = payload.consumedCalories;

  state.timeSport = payload.timeSport;
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
  state.isLoading = false;
}

function deleteFulfilled(state, { payload }) {
  const { exerciseId, productId, data } = payload;

  if (productId) {
    state.consumedProducts = [...state.consumedProducts].filter(
      (el) => el._id !== productId
    );
  }
  if (exerciseId) {
    state.doneExercises = [...state.doneExercises].filter(
      (el) => el._id !== exerciseId
    );
  }

  state.burnedCalories = data.burnedCalories;
  state.consumedCalories = data.consumedCalories;

  state.timeSport = data.timeSport;
  state.isLoading = false;
}

export const diaryReducer = diarySlice.reducer;
