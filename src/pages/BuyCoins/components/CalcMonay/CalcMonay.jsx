import React from "react";
import "./calcMoneyStyle.css";
import "./calcMonayMedia.css";
import changePrice from "../../../../utils/calculationBonus";
import { useCallback } from "react";

export default function CalcMonay(props) {
  let { value, setValue, promotions } = props;

  const onResultMoney = useCallback((e, typeConvector) => {
    setValue((prevState) => {
      const newObject = { ...prevState };
      newObject.typeExchange = typeConvector;
      if (e.target.name === "money") {
        newObject.fieldMoney = e.target.value;
        newObject.fieldGameMoney =
          newObject.fieldMoney === ""
            ? ""
            : Number(newObject.fieldMoney * 3).toFixed(0);
        changePrice(
          newObject.fieldGameMoney,
          setValue,
          promotions,
          "fieldGameMoney",
          false
        );
      } else if (e.target.name === "gameMoney") {
        newObject.fieldGameMoney = e.target.value;
        newObject.fieldMoney =
          newObject.fieldGameMoney === ""
            ? ""
            : Number(newObject.fieldGameMoney / 3).toFixed(0);
        changePrice(
          newObject.fieldGameMoney,
          setValue,
          promotions,
          "fieldGameMoney",
          false
        );
      }
      return newObject;
    });
  }, []);

  return (
    <form className="exchange">
      <div className="exchange__wrapper">
        <div className="exchange__body-field">
          <input
            className="exchange__input"
            value={value.fieldMoney}
            onChange={(e) => onResultMoney(e)}
            maxLength="9"
            type="text"
            name="money"
          />
        </div>
        <div className="exchange__equals">
          <span></span>
        </div>
        <div className="exchange__body-field">
          <input
            className="exchange__input"
            value={value.fieldGameMoney}
            onChange={(e) => onResultMoney(e)}
            maxLength="9"
            type="text"
            name="gameMoney"
          />
        </div>
      </div>
    </form>
  );
}
