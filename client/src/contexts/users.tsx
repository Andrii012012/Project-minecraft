import React, { ReactNode } from "react";
import { createContext, useState } from "react";
import callingServer from "../services/callServer";
import { IDataControlUsers } from "../interface/interface";
import { TDataUsers } from "../interface/type";

const UsersDatas = createContext<IDataControlUsers | null>(null);

function ContextUsersData(props: { children: ReactNode }): JSX.Element {
  let { children } = props;
  let [users, setUsers] = useState<TDataUsers>({
    users: null,
    loading: false,
  });

  async function getDataUsers(
    urlBd: string,
    form: object
  ): Promise<void | boolean> {
    const dataServer = await callingServer(urlBd, form);
    if (dataServer) {
      let { data } = dataServer;
      if (typeof data !== "string") {
        setUsers((prevState) => {
          const newObject = { ...prevState };
          newObject.users = data;
          newObject.loading = true;
          return newObject;
        });
        return true;
      } else {
        setUsers((prevState) => {
          const newObject = { ...prevState };
          newObject.users = data;
          newObject.loading = false;
          return newObject;
        });
        return false;
      }
    }
  }

  const object = {
    getDataUsers: getDataUsers,
    setUsers: setUsers,
    users: users,
  };

  return <UsersDatas.Provider value={object}>{children}</UsersDatas.Provider>;
}

export { ContextUsersData, UsersDatas };
