import { configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "./api";
import { charactersReducer } from "./characters.slice";
import { userReducer } from "./user.slice";

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    characters: charactersReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
