import React from "react";
import "./profileUserStyle.css";
import { useContext } from "react";
import { UserData } from "../../contexts/user";
import Profile from "../../containes/Profile/Profile";

export default function ProfileUser(props) {
  let {} = props;
  const data = useContext(UserData);
  const userData = data[2];

  if (userData.user) {
    return <Profile userData={userData.user} />;
  }
}
