import getPercent from "./getPercent";
import { IPromotions } from "../constants/promotions";
import { TGlobalSetValues } from "../interface/type";
import { IGlobalCalcData } from "../interface/interface";

export default function changePrice<
  T extends TGlobalSetValues,
  K extends IPromotions
>(
  fieldValue: string | number,
  setValue: T,
  promotions: K[],
  changeKey: string,
  sameField: boolean = true,
  start: number = 1000,
  breakpoints: number[] = [1000, 2000, 3000, 5000, 9999999]
) {
  setValue((prevState: IGlobalCalcData) => {
    const newValue = { ...prevState };
    if (sameField) {
      newValue[changeKey] =
        String(fieldValue).indexOf("0", 0) === 0
          ? (newValue[changeKey] = 0)
          : fieldValue;
    }
    function convector(): void {
      newValue.bonus =
        Math.round(
          Number(newValue[changeKey as keyof IGlobalCalcData]) *
            Number("1." + String(newValue.percent)) *
            100
        ) / 100;
    }
    getPercent<K>(
      start,
      breakpoints,
      convector,
      promotions,
      newValue,
      fieldValue,
      changeKey
    );
    return newValue;
  });
}
