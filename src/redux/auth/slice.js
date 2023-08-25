import { createSlice } from "@reduxjs/toolkit";
import {
  registerThunk,
  refreshThunk,
  loginThunk,
  logoutThunk,
} from "./operations";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    name: "User",
    token: "",
    avatar: "",
    loading: false,
  },
  reducers: {
    nextPage: (state) => {
      state.page = state.page + 1;
    },
    resetPage: (state) => {
      state.page = 0;
    },
    updateFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerThunk.pending, pending)
      .addCase(registerThunk.fulfilled, registerFulfilled)
      .addCase(registerThunk.rejected, rejected)
      .addCase(loginThunk.pending, pending)
      .addCase(loginThunk.fulfilled, registerFulfilled)
      .addCase(loginThunk.rejected, rejected)
      .addCase(refreshThunk.pending, pending)
      .addCase(refreshThunk.fulfilled, updateUserFulfilled)
      .addCase(refreshThunk.rejected, rejected)
      .addCase(logoutThunk.pending, pending)
      .addCase(logoutThunk.fulfilled, logout)
      .addCase(logoutThunk.rejected, logout),
});

function registerFulfilled(state, { payload }) {
  state.loading = false;
  state.avatar = payload.avatar;
  state.name = payload.name;
  state.token = payload.token;
  state.email = payload.email;
}

function updateUserFulfilled(state, { payload }) {
  state.loading = false;
  state.token = payload.token;
}

function logout(state) {
  state.loading = false;
  state.avatar = "";
  state.name = "";
  state.token = "";
  state.email = "";
}

function rejected(state, { payload }) {
  state.loading = false;
  console.error(`Error:${payload.message}`);
}

function pending(state) {
  state.loading = true;
}

export const { nextPage, updateFilter, resetPage } = userSlice.actions;

export const usersReducer = userSlice.reducer;
