import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { urlBd } from "../configs/urls";
import showAlert from "../utils/showAlert";


const UserData = createContext();

function ContextUserData({ children }) {
  useEffect(() => {
    setDataUser(urlBd, "");
  }, []);
  let [data, setData] = useState({
    isActive: false,
    user: null,
    loading: false,
  });

  async function setDataUser(urlBd, form) {
    const dataUser = await axios.post(urlBd, form);
    if (typeof dataUser.data !== "string") {
        setData((prevState) => {
        const newData = { ...prevState };
        newData.user = dataUser.data;
        newData.user.date = Number(newData.user.date);
        newData.isActive = true;
        newData.loading = true;
        return newData;
      });

      return true;
    } else {
      dataUser.data.length > 0 && showAlert(dataUser.data);
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
