import { IExchange } from "../pages/BuyCoins/interface/interface";
import { IStatBuyPrivilege } from "../pages/Privilege/interface/interface";
import { IStatePrice } from "../pages/Pay/interface/interface";
import { IValueField } from "../pages/Register/components/SendData/SendData";
import { TField } from "../pages/SettingsAccount/components/FormUpdataPassword/FormUpdataPassword";
import { TStateValue } from "../components/Sidebar/components/SingIn/SignIn";

interface IDataControlGetUser {
  setDataUser: (url: string, form: any) => Promise<boolean | void>;
  setData: (prevState: IData) => any;
  data: { user: IData };
}

interface IDataBan {
  id: string;
  reason: string;
  duration: string | number;
}

interface IDataServer {
  id: string;
  duration_status: string | null;
  indetifier: string | null;
  info_ban: IDataBan | null;
  is_team: string | null;
  server: string | null;
  server_id: string | null;
  monay: string;
  status: string;
  time: string;
}

interface IData {
  id: string;
  avatar: string;
  coins: string;
  date: string | number;
  email: string;
  identifier: string;
  is_team: string | null;
  login: string;
  password: string;
  servers: IDataServer[] | null;
  skin: string | null;
  status: string;
  short_description: string | null;
  bonus: string;
}

interface IServer {
  server: string;
  server_id: number;
}

interface IGlobalValuesSelect extends IExchange, IStatBuyPrivilege {}

interface IGlobalCalcData extends IExchange, IStatePrice {
  [key: string]: number | number[] | string | undefined;
}

interface IGlobalField extends IValueField, TField {}

interface IGlocalFieldInput extends Partial<TStateValue> {
  [key: string]: string | undefined;
}

export {
  type IData,
  type IServer,
  type IGlobalValuesSelect,
  type IDataServer,
  type IDataControlGetUser,
  type IGlobalCalcData,
  type IGlobalField,
  type IGlocalFieldInput,
};
