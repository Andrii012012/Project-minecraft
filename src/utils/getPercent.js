export default function getPercent(
  start,
  step,
  func,
  promotions,
  newValue,
  fieldValue,
  changeKey
) {
 let value = Number(fieldValue);
  if (value > start) {
    let index = 0;
    for (let i = 0; i < step.length; i++) {
      index = i;
      if (
        value >= step[i] &&
        value <= step[++index]
      ) {
        newValue.percent = promotions[i].percent;
        func();
      }
    }
  } else {
    newValue.percent = 0;
    newValue.bonus = newValue[changeKey];
  }
}
