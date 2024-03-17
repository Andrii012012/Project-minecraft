import React from "react";
import { createContext, useState } from "react";
import callingServer from "../services/callingServer";

const UsersDatas = createContext();

function ContextUsersData({ children }) {
  let [users, setUsers] = useState({
    users: null,
    isLoading: false,
  });

  async function getDataUsers(urlBd, form) {
    const dataServer = await callingServer(urlBd, form);
    let { data } = dataServer;
    if (typeof data !== "string") {
      setUsers((prevState) => {
        const newObject = { ...prevState };
        newObject.users = data;
        newObject.isLoading = true;
        return newObject;
      });
      return true;
    } else {
      setUsers((prevState) => {
        const newObject = { ...prevState };
        newObject.users = data;
        newObject.isLoading = false;
        return newObject;
      });
      return false;
    }
  }

  return (
    <UsersDatas.Provider value={[getDataUsers, setUsers, users]}>
      {children}
    </UsersDatas.Provider>
  );
}

export { ContextUsersData, UsersDatas };
