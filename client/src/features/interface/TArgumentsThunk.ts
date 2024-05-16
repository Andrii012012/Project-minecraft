type TArgumentsThunk = {
  url: string;
  method: "post" | "get";
  form?: object;
};

type TDataSignIn = {
  login: string;
  password: string;
}

export type { TArgumentsThunk, TDataSignIn };
