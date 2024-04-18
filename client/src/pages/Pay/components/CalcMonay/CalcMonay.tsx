import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import changePrice from "../../../../utils/calculationBonus";
import { TPromotions } from "../../../../interface/type";
import { TSetState } from "../../interface/type";
import { IStatePrice } from "../../interface/interface";

interface IProps {
  promotions: TPromotions[];
  setValue: TSetState;
  value: IStatePrice;
}

export default function CalcMonay(props: IProps): JSX.Element {
  let { promotions, setValue, value } = props;

  return (
    <form>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <p className={styles.infoPay}>
            Или самостоятельно укажите нужную вам сумму монет в специальном поле
            справа
          </p>
          <p>
            После пополнения на Ваш счет будет зачислено: Включая акцию на{" "}
            {value.percent}%
          </p>
        </div>
        <div>
          <div className={styles.bodyInput}>
            <input
              id="buyMonayInput"
              className={styles.input}
              name="buyMonay"
              maxLength={9}
              value={value.field}
              onChange={(e) =>
                changePrice(e.target.value, setValue, promotions, "field")
              }
            />
            <label htmlFor="buyMonayInput" className={styles.inputText}>
              введите количество монет
            </label>
          </div>
          <p className={`${styles.showCoins} ${gStyles.sectionName}`}>
            {Number(value.bonus) > 0 ? value.bonus : 0 }
            <span>монет</span>
          </p>
        </div>
      </div>
    </form>
  );
}
