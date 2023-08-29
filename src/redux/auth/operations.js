import { createAsyncThunk } from "@reduxjs/toolkit";

import { login, register } from "../../services/publicAPI";
import { refresh, logout } from "../../services/privatAPI";
export const loginThunk = createAsyncThunk("users/login", login);
export const registerThunk = createAsyncThunk("users/register", register);
export const refreshThunk = createAsyncThunk("users/refresh", refresh);
export const logoutThunk = createAsyncThunk("users/logout", logout);
