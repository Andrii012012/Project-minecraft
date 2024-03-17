import React from "react";
import "./ProfileUser.css";
import { useContext } from "react";
import { UserData } from "../../contexts/user";
import Profile from "../../containes/Profile/Profile";

export default function ProfileUser(props) {
  const data = useContext(UserData);
  const userData = data[2];

  if (userData.user) {
     return(
      <Profile userData={userData}/>
     )
  }
}
