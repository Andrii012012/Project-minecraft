import axios from "axios";
import { urlBd } from "../configs/urls";

  async function setDataUser(urlBd, form) {
    const dataUser = await axios.post(urlBd, form);
    if (typeof dataUser.data !== "string") {
      return ;
    } else {
       return dataUser.data;
    }
  }

 export { setDataUser };