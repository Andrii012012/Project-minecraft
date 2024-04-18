import React from "react";
import styles from "./style.module.scss";
import { useParams } from "react-router-dom";
import Profile from "../../containers/Profile/Profile";
import { useContext, useEffect } from "react";
import { CallUser } from "../../contexts/getUser";
import { urlGetUser } from "../../configs/urls";
import Error from "../Error/Error";
import { IDataControlGetUser } from "../../interface/interface";

export default function ProfileUsers(): JSX.Element {
  const value = useParams();
  const data = useContext<IDataControlGetUser | null>(CallUser);
  const dataUser = data?.data;
  const onFuncGetUser = data?.setDataUser;

  async function onSubmitData() {
    const form = new FormData();
    if (value && value.id) {
      form.append("getUser", value.id);
      onFuncGetUser && onFuncGetUser(urlGetUser, form);
    }
  }
  useEffect(() => {
    onSubmitData();
  }, [value]);
  if (dataUser && dataUser.user) {
    return <Profile userData={dataUser.user} />;
  } else {
    return <Error />;
  }
}
