import { createSlice } from "@reduxjs/toolkit";
import {
  registerThunk,
  refreshThunk,
  loginThunk,
  logoutThunk,
} from "./operations";
import { token } from "@/services/privateAPI";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    name: "User",
    token: "",
    avatar: "",
    isLoading: false,
    isAuth: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerThunk.pending, pending)
      .addCase(registerThunk.fulfilled, registerFulfilled)
      .addCase(registerThunk.rejected, rejected)
      .addCase(loginThunk.pending, pending)
      .addCase(loginThunk.fulfilled, registerFulfilled)
      .addCase(loginThunk.rejected, rejected)
      .addCase(refreshThunk.pending, pendingRefresh)
      .addCase(refreshThunk.fulfilled, registerFulfilled)
      .addCase(refreshThunk.rejected, rejected)
      .addCase(logoutThunk.pending, pending)
      .addCase(logoutThunk.fulfilled, logout)
      .addCase(logoutThunk.rejected, logout),
});

function registerFulfilled(state, { payload }) {
  state.isLoading = false;
  state.isAuth = true;
  state.avatar = payload.avatar;
  state.name = payload.name;
  state.token = payload.token;
  state.email = payload.email;
}

function logout(state) {
  state.isLoading = false;
  state.avatar = "";
  state.name = "";
  state.token = "";
  state.email = "";
  state.isAuth = false;
}

function rejected(state, { payload }) {
  state.isLoading = false;
  state.isAuth = false;
  console.error(`Error:${payload.message}`);
}

function pending(state) {
  state.isLoading = true;
}
function pendingRefresh(state) {
  state.isLoading = true;
  token.set(state.token);
}

export const usersReducer = userSlice.reducer;
