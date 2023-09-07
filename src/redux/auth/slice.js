import { createSlice } from "@reduxjs/toolkit";
import {
  registerThunk,
  refreshThunk,
  loginThunk,
  logoutThunk,
  updateBodyThunk,
  changeAvatarThunk,
} from "./operations";
import { token } from "@/services/privateAPI";
import { toast } from "react-toastify";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    name: "User",
    token: "",
    avatar: "",
    isLoading: false,
    isAuth: false,
    updatedAt: "",
    createdAt: "",

    body: {},
    bodyData: null,
  },
  reducers: {
    updateBodyParams: (state, { payload }) => {
      state.body = { ...state.body, ...payload };
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

      .addCase(refreshThunk.pending, pendingRefresh)
      .addCase(refreshThunk.fulfilled, refreshFulfilled)
      .addCase(refreshThunk.rejected, rejected)

      .addCase(logoutThunk.pending, pending)
      .addCase(logoutThunk.fulfilled, logout)
      .addCase(logoutThunk.rejected, logout)

      .addCase(updateBodyThunk.pending, pending)
      .addCase(updateBodyThunk.fulfilled, updateBodyFulfilled)
      .addCase(updateBodyThunk.rejected, rejected)
      .addCase(changeAvatarThunk.pending, pending)
      .addCase(changeAvatarThunk.fulfilled, changeAvatarFulfilled)
      .addCase(changeAvatarThunk.rejected, rejected),
});

function registerFulfilled(state, { payload }) {
  state.isLoading = false;
  state.isAuth = true;
  state.avatar = payload.avatar;
  state.name = payload.name;
  state.token = payload.token;
  state.email = payload.email;

  state.bodyData = payload.bodyData || null;
}
function refreshFulfilled(state, { payload }) {
  if (payload) {
    state.isLoading = false;
    state.isAuth = true;
    state.avatar = payload.avatar;
    state.name = payload.name;
    state.token = payload.token;
    state.email = payload.email;
    state.updatedAt = payload.updatedAt;
    state.createdAt = payload.createdAt;
    state.bodyData = payload.bodyData;
  } else {
    state.isLoading = false;
    state.isAuth = false;
  }
}

function logout(state) {
  state.isLoading = false;
  state.avatar = "";
  state.name = "";
  state.token = "";
  state.email = "";
  state.isAuth = false;
  state.bodyData = null;
}

function rejected(state, { error }) {
  state.isLoading = false;
  state.isAuth = false;
  toast.error(error.message);
}

function pending(state) {
  state.isLoading = true;
}
function pendingRefresh(state) {
  state.isLoading = true;
  state.token && token.check(state.token);
}

function updateBodyFulfilled(state, { payload }) {
  state.isLoading = false;
  state.isAuth = true;
  state.bodyData = payload.bodyData || null;
  state.name = payload.name;
  toast.success("update successfull");
}

function changeAvatarFulfilled(state, { payload }) {
  state.isLoading = false;
  state.isAuth = true;
  state.avatar = payload.avatar;
}

export const usersReducer = userSlice.reducer;

export const { updateBodyParams } = userSlice.actions;
