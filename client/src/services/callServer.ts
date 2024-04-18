import axios from "axios";
import { ERROR_CONNECT_TO_SERVER } from "../constants/massage";

export default async function callingServer(url: string, form: object) {
  try {
    const data = await axios.post(url, form);

    if (data.status !== 200) {
      throw new Error(ERROR_CONNECT_TO_SERVER);
    }

    return data;
  } catch (err) {
    return false;
  }
}
