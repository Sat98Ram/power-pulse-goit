import { createSlice } from "@reduxjs/toolkit";
import { exerciseCategoriesThunk, exerciseListThunk } from "./operation";
import { exercisesImages } from "../../constants/exercisesImg";

export const exrcisesSlice = createSlice({
  name: "exercises",
  initialState: {
    bodyparts: [],
    equipments: [],
    muscules: [],
    exerciseList: [],
    selectedCategory: {},
    isLoading: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(exerciseCategoriesThunk.pending, pending)
      .addCase(exerciseCategoriesThunk.fulfilled, categoryFulfilled)
      .addCase(exerciseCategoriesThunk.rejected, rejected)
      .addCase(exerciseListThunk.pending, pending)
      .addCase(exerciseListThunk.fulfilled, listFulfilled)
      .addCase(exerciseListThunk.rejected, pending),
});

function pending(state) {
  state.isLoading = true;
}

function categoryFulfilled(state, { payload }) {
  state.bodyparts = payload.bodyparts.map((el) => ({
    title: el,
    srcSet: exercisesImages[el].srcSet,
  }));
  state.muscules = payload.muscles.map((el) => ({
    title: el,
    srcSet: exercisesImages[el].srcSet,
  }));
  state.equipments = payload.equipments.map((el) => ({
    title: el,
    srcSet: exercisesImages[el].srcSet,
  }));

  state.isLoading = false;
}

function listFulfilled(state, { payload }) {
  state.exerciseList = payload;
  state.isLoading = false;
}

function rejected(state) {
  state.isLoading = false;
}

export const exrciseReducer = exrcisesSlice.reducer;
