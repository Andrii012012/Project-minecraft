import {
  PayloadAction,
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import clientApi from "../../api/client";
import showAlert from "../../utils/showAlert";
import { urlGetTeamProject } from "../../configs/urls";
import { IData } from "../../interface/interface";

type TInitialState = {
  users: IData[] | null;
  status: "idel" | "reject" | "success" | "pending";
  error: null | string;
};

const initialState: TInitialState = {
  users: null,
  status: "idel",
  error: null,
};

export const callDateUsers = createAsyncThunk(
  "users/callDataUsers",
  async (_, { rejectWithValue }) => {
    const result = await clientApi("get", urlGetTeamProject, rejectWithValue);
    return result;
  }
);

export const slice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(callDateUsers.pending, (state: TInitialState) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(
      callDateUsers.fulfilled,
      (state: TInitialState, action: PayloadAction<IData[] | string>) => {
        if (typeof action.payload === "object") {
          state.users = action.payload;
        } else {
          state.error = action.payload;
          showAlert(action.payload);
        }
      }
    );
    builder.addCase(callDateUsers.rejected, (state: TInitialState, action) => {
      let error: SerializedError = action.error;
      state.error = String(error.message);
      state.status = "reject";
      showAlert(String(error.message));
    });
  },
});

export type { TInitialState };
export const users = slice.reducer;
