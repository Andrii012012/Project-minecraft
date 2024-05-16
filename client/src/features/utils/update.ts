import { urlSignBD } from "../../configs/urls";
import { callDateUser } from "../user/user.";
import { AppDispatch } from "../../store/store";

export default function updata(
  status: string,
  data: { login: string; password: string },
  dispatch: AppDispatch
) {
  let { login, password } = data;

  if (status === "success") {
    const formSignIn = new FormData();
    formSignIn.append("login", login);
    formSignIn.append("password", password);
    dispatch(
      callDateUser({ method: "post", url: urlSignBD, form: formSignIn })
    );
  }
}
