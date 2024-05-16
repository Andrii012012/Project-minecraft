import { IData, IGlocalFieldInput } from "./interface";
import { TSetExchange } from "../pages/BuyCoins/interface/type";
import { TSetStatePrivilege } from "../pages/Privilege/interface/type";
import { TSetState } from "../pages/Pay/interface/type";
import { IGlobalField } from "./interface";

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
  type TPromotions,
  type TGlobalSetValues,
  type TGlobalSetValuesCalc,
  type TGlobalSetField,
  type TGlobalFieldInput,
};
