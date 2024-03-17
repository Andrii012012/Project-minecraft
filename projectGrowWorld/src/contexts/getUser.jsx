import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { urlBd } from "../configs/urls";

const CallUser = createContext();

function ContextCallUser({ children }) {
     useEffect(() => { setDataUser(urlBd, '') }, []);
     let [data, setData] = useState({
      user: null,
});

  async function setDataUser(urlBd, form) {
    const dataUser = await axios.post(urlBd, form);
    if (typeof dataUser.data !== "string") {
      setData((prevState) => {
        const newData = { ...prevState };
        newData.user = dataUser.data;
        newData.user.date = Number(newData.user.date);
        return newData;
      });
    }
  }

  return (
    <CallUser.Provider value={[setDataUser, setData, data]}>
      {children}
    </CallUser.Provider>
  );
}

export { ContextCallUser, CallUser };
