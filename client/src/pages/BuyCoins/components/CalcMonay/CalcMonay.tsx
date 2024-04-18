import React from "react";
import styles from "./style.module.scss";
import changePrice from "../../../../utils/calculationBonus";
import { useCallback } from "react";
import { IExchange } from "../../interface/interface";
import { TSetExchange } from "../../interface/type";
import { TPromotions } from "../../../../interface/type";

interface IProps {
  value: IExchange;
  setValue: TSetExchange;
  promotions: TPromotions[];
}

export default function CalcMonay(props: IProps): JSX.Element {
  let { value, setValue, promotions } = props;

  const onResultMoney = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue((prevState) => {
        const newObject = { ...prevState };
        if (e.target.name === "monay") {
          newObject.fieldMonay = e.target.value;
          newObject.fieldGameMonay =
            newObject.fieldMonay === ""
              ? ""
              : (Number(newObject.fieldMonay) * 3).toFixed(0);
          changePrice(
            newObject.fieldGameMonay,
            setValue,
            promotions,
            "fieldGameMonay",
            false
          );
        } else if (e.target.name === "gameMonay") {
          newObject.fieldGameMonay = e.target.value;
          newObject.fieldMonay =
            newObject.fieldGameMonay === ""
              ? ""
              : (Number(newObject.fieldGameMonay) / 3).toFixed(0);
          changePrice(
            newObject.fieldGameMonay,
            setValue,
            promotions,
            "fieldGameMonay",
            false
          );
        }

        return newObject;
      });
    },
    []
  );

  return (
    <form className={styles.exchange}>
      <div className={styles.wrapper}>
        <div className={styles.bodyField}>
          <input
            className={styles.input}
            value={value.fieldMonay as keyof React.ReactNode}
            onChange={(e) => onResultMoney(e)}
            maxLength={9}
            type="text"
            name="monay"
          />
        </div>
        <div className={styles.equals}>
          <span></span>
        </div>
        <div className={styles.bodyField}>
          <input
            className={styles.input}
            value={value.fieldGameMonay}
            onChange={(e) => onResultMoney(e)}
            maxLength={9}
            type="text"
            name="gameMonay"
          />
        </div>
      </div>
    </form>
  );
}
