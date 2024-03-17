import React from "react";
import { createContext, useState } from "react";
import axios from "axios";


const UsersDatas = createContext();

function ContextUsersData({ children }) {
  let [users, setUsers] = useState({
    users: null,
  });

  async function getDataUsers(urlBd, form) {
    const dataUsers = await axios.post(urlBd, form);
    if (typeof dataUsers.data !== "string") {
      setUsers((prevState) => {
        const newObject = {...prevState};
         newObject.users = dataUsers.data;
        return newObject;
      });
    }
  }

  return (
    <UsersDatas.Provider value={[getDataUsers, setUsers, users]}>
      {children}
    </UsersDatas.Provider>
  );
}

export { ContextUsersData, UsersDatas };
