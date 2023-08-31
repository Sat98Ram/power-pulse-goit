import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { usersReducer } from "./auth/slice";
import { productsReducer } from "./products/slice";
import { exrciseReducer } from "./exercises/slice";
import { diaryReducer } from "./diary/slice";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["name", "email", "token"],
};
const persistedReducer = persistReducer(persistConfig, usersReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    exercises: exrciseReducer,
    products: productsReducer,
    diary: diaryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
