import { Reducer, configureStore } from "@reduxjs/toolkit";
import { IInitialState, user } from "../features/user/user.";
import { TypedUseSelectorHook } from "react-redux";
import { TInitialState, users } from "../features/users/users";

type TReducers = {
  user: Reducer<IInitialState>;
  users: Reducer<TInitialState>;
};

const reducer: TReducers = {
  user: user,
  users: users,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppSelector = TypedUseSelectorHook<RootState>;



























