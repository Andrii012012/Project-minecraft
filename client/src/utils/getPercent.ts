import { IPromotions } from "../constants/promotions";
import { IGlobalCalcData } from "../interface/interface";

export default function getPercent<K extends IPromotions>(
  start: number,
  breakpoints: number[],
  convector: () => void,
  promotions: K[],
  newValue: IGlobalCalcData,
  fieldValue: string | number,
  changeKey: string
): void {
  let value = Number(fieldValue);
  if (value > start) {
    let index = 0;
    for (let i = 0; i < breakpoints.length; i++) {
      index = i;
      if (value >= breakpoints[i] && value <= breakpoints[++index]) {
        newValue.percent = Number(promotions[i].percent);
        convector();
      }
    }
  } else {
    newValue.percent = 0;
    newValue.bonus = Number(newValue[changeKey]);
  }
}
