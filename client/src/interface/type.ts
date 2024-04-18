import { IData, IGlocalFieldInput } from "./interface";
import { TSetExchange } from "../pages/BuyCoins/interface/type";
import { TSetStatePrivilege } from "../pages/Privilege/interface/type";
import { TSetState } from "../pages/Pay/interface/type";
import { IGlobalField } from "./interface";

type TParams = {
  user: IData | null;
  loading: boolean;
};

type TData = TParams & {
  isActive?: boolean;
};

type TDataUsers = {
  users: any;
  loading: boolean;
};

type TFuncSend = {
  (urlBd: string, form: object): Promise<boolean | void>;
};

type TPromotions = {
  img: string;
  title: string;
  bonus: string;
  percent: string;
};

type TGlobalSetValues = TSetExchange & TSetStatePrivilege & {};

type TGlobalSetValuesCalc = TSetExchange & TSetState & {};

type TGlobalSetField = React.Dispatch<React.SetStateAction<IGlobalField>>;

type TGlobalFieldInput = React.Dispatch<React.SetStateAction<IGlocalFieldInput>>

export {
  type TData,
  type TDataUsers,
  type TFuncSend,
  type TPromotions,
  type TGlobalSetValues,
  type TGlobalSetValuesCalc,
  type TGlobalSetField,
  type TGlobalFieldInput,
};
