import React, { ReactNode } from "react";
import { createContext, useState, useEffect } from "react";
import callingServer from "../services/callServer";
import { urlBd } from "../configs/urls";
import { TData } from "../interface/type";
import { IData } from "../interface/interface";
import { IDataControlGetUser } from "../interface/interface";

const CallUser = createContext<IDataControlGetUser | null>(null);

function ContextCallUser(props: { children: ReactNode }): JSX.Element {
  let { children } = props;

  useEffect((): void => {
    setDataUser(urlBd, {});
  }, []);

  let [data, setData] = useState<TData>({
    user: null,
    loading: false,
  });

  async function setDataUser(
    urlBd: string,
    form: object
  ): Promise<void | boolean> {
    const dataServer = await callingServer(urlBd, form);
    if (dataServer) {
      let data: IData = dataServer.data;
      if (typeof data !== "string") {
        setData((prevState) => {
          const newData = { ...prevState };
          newData.user = data;
          newData.loading = true;
          return newData;
        });
        return true;
      } else {
        setData((prevState) => {
          const newData = { ...prevState };
          newData.loading = false;
          return newData;
        });
        return false;
      }
    }
  }

  const object = {
    setDataUser: setDataUser,
    setData: setData,
    data: data,
  };

  return <CallUser.Provider value={object}>{children}</CallUser.Provider>;
}

export { ContextCallUser, CallUser };
