import React, { ReactNode } from "react";
import { createContext, useState, useEffect } from "react";
import { urlBd } from "../configs/urls";
import showAlert from "../utils/showAlert";
import callingServer from "../services/callServer";
import { IDataControl } from "../interface/interface";
import { TData } from "../interface/type";
import { IData } from "../interface/interface";

const UserData = createContext<IDataControl | null>(null);

function ContextUserData(props: { children: ReactNode }): JSX.Element {
  let { children } = props;
  let [data, setData] = useState<TData>({
    isActive: false,
    user: null,
    loading: false,
  });

  function leave(): void {
    setData((prevState) => {
      const newState = { ...prevState };
      newState.isActive = false;
      return newState;
    });
  }

  useEffect((): void => {
    setDataUser(urlBd, {});
  }, []);

  async function setDataUser(
    urlBd: string,
    form: object
  ): Promise<void | boolean> {
    const dataUser = await callingServer(urlBd, form);
    if (dataUser) {
      const data: IData = dataUser.data;
      if (data && typeof data !== "string") {
        setData((prevState) => {
          const newData = { ...prevState };
          newData.user = data;
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
  }

  const object = {
    setDataUser: setDataUser,
    leave: leave,
    data: data,
  };

  const dataControl: IDataControl = object;

  if (dataControl.data) {
    return (
      <UserData.Provider value={dataControl}>{children}</UserData.Provider>
    );
  } else {
    return <UserData.Provider value={null}>{children}</UserData.Provider>;
  }
}

export { ContextUserData, UserData };
