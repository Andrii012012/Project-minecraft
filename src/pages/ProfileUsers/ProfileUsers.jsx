import React from "react";
import "./profileUsersStyle.css";
import { useParams } from "react-router-dom";
import Profile from "../../containes/Profile/Profile.jsx";
import { useContext, useEffect } from "react";
import { CallUser } from "../../contexts/getUser.jsx";
import { urlBd } from "../../configs/urls.js";
import Error from "../Error/Error.jsx";

export default function ProfileUsers(props) {
  let {} = props;
  const value = useParams();
  const data = useContext(CallUser);
  const dataUser = data[2];
  const onFuncGetUser = data[0];
  async function onSubmitData() {
    const form = new FormData();
    form.append("getUser", value.id);
    onFuncGetUser(urlBd, form);
  }
  useEffect(() => {
    onSubmitData();
  }, [value]);
  if (dataUser.user) {
    return <Profile userData={dataUser.user} />;
  } else {
    return <Error />;
  }
}
