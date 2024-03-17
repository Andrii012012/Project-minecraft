import getPercent from "./getPercent";

export default function changePrice(
  fieldValue,
  setValue,
  promotions,
  changeThing,
  theSameField = true,
  start = 1000,
  breakpoints = [1000, 2000, 3000, 5000, 9999999],
) {
  setValue((prevState) => {
    const newValue = { ...prevState };
    if (theSameField) {
      newValue[changeThing] =
        fieldValue.indexOf("0", 0) === 0
          ? (newValue[changeThing] = 0)
          : fieldValue;
     } 
    function convector() {
      newValue.bonus = 
        Math.round(
          newValue[changeThing] * Number("1." + String(newValue.percent)) * 100
        ) / 100;
    }
    getPercent(start, breakpoints, convector, promotions, newValue, fieldValue, changeThing);
    return newValue;
  });
}
