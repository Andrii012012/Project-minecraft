import { IStatePrice } from "./interface";

type TSetState = React.Dispatch<React.SetStateAction<IStatePrice>>;

type TCards = Record<"img", string>;

export { type TSetState, type TCards };
