import type { AppSelector } from "../store/store";
import { useSelector } from "react-redux";

export const useAppSelector: AppSelector = useSelector;