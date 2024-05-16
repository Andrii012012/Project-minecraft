import {
  PayloadAction,
  SerializedError,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { IData } from "../../interface/interface";
import clientApi from "../../api/client";
import showAlert from "../../utils/showAlert";
import { TArgumentsThunk, TDataSignIn } from "../interface/TArgumentsThunk";

interface IInitialState {
  user: null | IData;
  dataSingIn: null | TDataSignIn;
  status: "idel" | "pending" | "success" | "rejected";
  error: null | string;
}

const initialState: IInitialState = {
  user: null,
  dataSingIn: null,
  status: "idel",
  error: null,
};

export const callDateUser = createAsyncThunk(
  "user/getUser",
  async (data: TArgumentsThunk, { rejectWithValue }) => {
    let { method, url, form } = data;
    const result = await clientApi(method, url, form, rejectWithValue);
    return result;
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async (data: TArgumentsThunk, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const { method, url, form } = data;
    const result = await clientApi(method, url, form, rejectWithValue);
    return result;
  }
);

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state: IInitialState) => {
      state.user = null;
      state.status = "idel";
    },
    setDataSignIn: (
      state: IInitialState,
      action: PayloadAction<TDataSignIn>
    ) => {
      state.dataSingIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(callDateUser.pending, (state: IInitialState) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(
      callDateUser.fulfilled,
      (state: IInitialState, action: PayloadAction<IData>) => {
        if (typeof action.payload === "object") {
          state.status = "success";
          state.user = action.payload;
        } else if (
          typeof action.payload === "string" &&
          String(action.payload).length > 0
        ) {
          state.status = "rejected";
          state.error = action.payload;
          showAlert(action.payload);
        }
      }
    );
    builder.addCase(callDateUser.rejected, (state: IInitialState, action) => {
      const error: SerializedError = action.error;
      state.status = "rejected";
      state.error = String(error.message);
      showAlert(String(error.message));
    });

    builder.addCase(updateUser.pending, (state: IInitialState) => {
      state.status = "pending";
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state: IInitialState) => {
      state.status = "success";
    });
    builder.addCase(updateUser.rejected, (state: IInitialState, action) => {
      const error: SerializedError = action.error;
      state.status = "rejected";
      state.error = String(error.message);
    });
  },
});

export type { IInitialState };
export const { logout, setDataSignIn } = slice.actions;
export const user = slice.reducer;
