import { TData } from "./type";
import { TDataUsers } from "./type";
import { IExchange } from "../pages/BuyCoins/interface/interface";
import { IStatBuyPrivilege } from "../pages/Privilege/interface/interface";
import { IStatePrice } from "../pages/Pay/interface/interface";
import { IValueField } from "../pages/Register/components/SendData/SendData";
import { TField } from "../pages/SettingsAccount/components/FormUpdataPassword/FormUpdataPassword";
import { TStateValue } from "../components/Sidebar/components/SingIn/SignIn";

interface IDataControl {
  setDataUser: (urlBd: string, form: object) => Promise<boolean | void>;
  leave: () => void;
  data: TData;
}

interface IDataControlUsers {
  getDataUsers: (urlBd: string, form: object) => Promise<boolean | void>;
  setUsers: React.Dispatch<
    React.SetStateAction<{ users: any; loading: boolean }>
  >;
  users: TDataUsers;
}

interface IDataControlGetUser {
  setDataUser: (url: string, form: any) => Promise<boolean | void>;
  setData: (prevState: any) => any;
  data: { user: any };
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

interface IObjectDataServer {
  user: IData | null;
  loading: boolean;
  isActive?: boolean;
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
  type IDataControl,
  type IDataControlUsers,
  type IData,
  type IObjectDataServer,
  type IServer,
  type IGlobalValuesSelect,
  type IDataServer,
  type IDataControlGetUser,
  type IGlobalCalcData,
  type IGlobalField,
  type IGlocalFieldInput,
};
