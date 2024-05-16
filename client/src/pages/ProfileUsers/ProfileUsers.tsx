import { useParams } from "react-router-dom";
import Profile from "../../containers/Profile/Profile";
import { urlGetUser } from "../../configs/urls";
import Error from "../Error/Error";
import { useEffect, useState } from "react";
import { IData } from "../../interface/interface";
import clientApi from "../../api/client";

export default function ProfileUsers(): JSX.Element {
  const value = useParams();
  const [dataUser, setUserData] = useState<IData>();

  async function onSubmitData() {
    if (value && value.id) {
      const form = new FormData();
      form.append("getUser", value.id);
      let data = await clientApi('post', urlGetUser, form);
      setUserData(data && data);
    }
  }
  useEffect(() => {
    onSubmitData();
  }, [value]);


  if (dataUser) {
    return <Profile userData={dataUser} />;
  } else {
    return <Error />;
  }
}
