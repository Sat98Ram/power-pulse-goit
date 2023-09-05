import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "@/services/publicAPI";
import { refresh, logout } from "@/services/privateAPI";
import { changeAvatar, updateBody } from "../../services/privateAPI";

export const loginThunk = createAsyncThunk("users/login", login);
export const registerThunk = createAsyncThunk("users/register", register);
export const refreshThunk = createAsyncThunk("users/refresh", refresh);
export const logoutThunk = createAsyncThunk("users/logout", logout);

export const updateBodyThunk = createAsyncThunk("users/update", updateBody);
export const changeAvatarThunk = createAsyncThunk(
  "users/changeAvatar",
  changeAvatar
);
