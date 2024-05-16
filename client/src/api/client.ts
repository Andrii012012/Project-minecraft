import axios from "axios";
import { ERROR_CONNECT_TO_SERVER } from "../constants/massage";

export default async function clientApi(
  method: "get" | "post",
  url: string,
  form?: object,
  functionRejectWithValue?: (error: any) => void
) {
  try {
    let data = null;
    if (method === "post") {
      data = await axios.post(url, form);
       console.log(data);
    } else {
      data = await axios.get(url);
    }

    if (data.status !== 200) {
      throw new Error(ERROR_CONNECT_TO_SERVER);
    }

    return data.data;
  } catch (err) {
    if (err instanceof Error) {
      if (functionRejectWithValue) {
        return functionRejectWithValue(err.message);
      }
      console.log(err.message);
    }
  }
}
