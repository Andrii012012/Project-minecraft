import React from "react";
import { useParams } from "react-router-dom";
import Profile from "../../containes/Profile/Profile.jsx";
import { useContext, useEffect } from "react";
import { CallUser } from "../../contexts/getUser.jsx";
import { urlBd } from "../../configs/urls.js";

export default function ProfileUsers(props) {
  let {} = props;
  const value = useParams();
  const data = useContext(CallUser);
  const dataUser = data[2];
  const funcGetUser = data[0];
  async function getUser() {
    const form = new FormData();
    form.append("getUser", value.id);
    funcGetUser(urlBd, form);
  };
  useEffect(() => {
    getUser();
  }, [value]);
  if (dataUser.user) {
    return <Profile userData={dataUser} />;
  }
}
