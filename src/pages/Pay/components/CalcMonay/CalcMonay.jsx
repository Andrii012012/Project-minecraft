import React from "react";
import "./calcMonayStyle.css";
import "./calcMonayMedia.css";
import changePrice from "../../../../utils/calculationBonus.js";

export default function CalcMonay(props) {
  let { promotions, setValue, value } = props;

  return (
    <form className="buy-monay">
      <div className="buy-monay__wrapper">
        <div className="buy-monay__info">
          <p className="buy-monay__info-about-pay text">
            Или самостоятельно укажите нужную вам сумму монет в специальном поле
            справа
          </p>
          <p className="buy-monay__info-percent text">
            После пополнения на Ваш счет будет зачислено: Включая акцию на{" "}
            {value.percent}%
          </p>
        </div>
        <div className="buy-conis__set">
          <div className="buy-monay__body-input">
            <input
              id="buy-monay-input"
              className="buy-monay__input"
              name="buy-monay"
              maxLength="9"
              value={value.field}
              onChange={(e) =>
                changePrice(e.target.value, setValue, promotions, "field")
              }
            />
            <label htmlFor="buy-monay-input" className="buy-monay__input-text">
              введите количество монет
            </label>
          </div>
          <p className="buy-monay__show-sum-coins">
            {value.bonus > 0 ? value.bonus : 0}
            <span>монет</span>
          </p>
        </div>
      </div>
    </form>
  );
}
