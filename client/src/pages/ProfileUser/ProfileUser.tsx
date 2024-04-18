import React from "react";
import { useContext } from "react";
import { UserData } from "../../contexts/user";
import Profile from "../../containers/Profile/Profile";
import { IDataControl } from "../../interface/interface";

export default function ProfileUser(): JSX.Element {
  const data = useContext<IDataControl | null>(UserData);
  const userData = data?.data;

  if (userData?.user) {
    return <Profile userData={userData.user} />;
  } else {
    return <></>;
  }
}
