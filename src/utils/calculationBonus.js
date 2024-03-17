import getPercent from "./getPercent";

export default function changePrice(
  fieldValue,
  setValue,
  promotions,
  changeKey,
  theSameField = true,
  start = 1000,
  breakpoints = [1000, 2000, 3000, 5000, 9999999],
) {
  setValue((prevState) => {
    const newValue = { ...prevState };
    if (theSameField) {
      newValue[changeKey] =
        fieldValue.indexOf("0", 0) === 0
          ? (newValue[changeKey] = 0)
          : fieldValue;
     } 
    function convector() {
      newValue.bonus = 
        Math.round(
          newValue[changeKey] * Number("1." + String(newValue.percent)) * 100
        ) / 100;
    }
    getPercent(start, breakpoints, convector, promotions, newValue, fieldValue, changeKey);
    return newValue;
  });
}
