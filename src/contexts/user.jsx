import React from "react";
import { createContext, useState, useEffect } from "react";
import { urlBd } from "../configs/urls";
import showAlert from "../utils/showAlert";
import callingServer from "../services/callingServer";

const UserData = createContext();

function ContextUserData({ children }) {
  let [data, setData] = useState({
    isActive: false,
    user: null,
    loading: false,
  });

  useEffect(() => {
    setDataUser(urlBd, "");
  }, []);

  async function setDataUser(urlBd, form) {
    const dataUser = await callingServer(urlBd, form);
     let { data } = dataUser;
    if (typeof dataUser.data !== "string") {
      setData((prevState) => {
        const newData = { ...prevState };
        newData.user = data;
        newData.user.date = Number(data.date);
        newData.isActive = true;
        newData.loading = true;
        return newData;
      });

      return true;
    } else {
      dataUser.data.length > 0 && showAlert(data);
      setData((prevState) => {
        const newData = { ...prevState };
        newData.loading = false;
        return newData;
      });

      return false;
    }
  }

  return (
    <UserData.Provider value={[setDataUser, setData, data]}>
      {children}
    </UserData.Provider>
  );
}

export { ContextUserData, UserData };
