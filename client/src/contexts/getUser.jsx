import React from "react";
import { createContext, useState, useEffect } from "react";
import callingServer from "../services/callingServer";
import { urlBd } from "../configs/urls";

const CallUser = createContext();

function ContextCallUser({ children }) {
  useEffect(() => {
    setDataUser(urlBd, "");
  }, []);
  let [data, setData] = useState({
    user: null,
    isLoading: false,
  });

  async function setDataUser(urlBd, form) {
    const dataServer = await callingServer(urlBd, form);
    let { data } = dataServer;
    if (data) {
      if (typeof data !== "string") {
        setData((prevState) => {
          const newData = { ...prevState };
          newData.user = data;
          newData.isLoading = true;
          newData.user.date = Number(data.date);
          return newData;
        });
        return true;
      } else {
        setData((prevState) => {
          const newData = { ...prevState };
          newData.user = data;
          newData.isLoading = false;
          return newData;
        });
        return false;
      }
    }
  }

  return (
    <CallUser.Provider value={[setDataUser, setData, data]}>
      {children}
    </CallUser.Provider>
  );
}

export { ContextCallUser, CallUser };
