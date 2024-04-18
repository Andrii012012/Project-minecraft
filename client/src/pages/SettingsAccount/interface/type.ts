import { ISettings } from "./interface";

type TUserList = Record<"title" | "description" | "change" | "name", string>;

type TSetSettings = React.Dispatch<React.SetStateAction<ISettings>>;

type TMains = Record<"text" | "image" | "path", string>;

export { type TUserList, type TSetSettings, type TMains };
