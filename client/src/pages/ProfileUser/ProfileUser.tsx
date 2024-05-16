import Profile from "../../containers/Profile/Profile";
import { useAppSelector } from "../../hooks/useAppSelector";

export default function ProfileUser(): JSX.Element {
  const data = useAppSelector(state => state.user);
  const userData = data.user;

  if (userData) {
    return <Profile userData={userData} />;
  } else {
    return <></>;
  }
}
