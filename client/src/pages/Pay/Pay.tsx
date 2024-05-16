import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import UserHeader from "../../components/UserHeader/UserHeader";
import paySystemCard from "../../assets/images/page/Pay/pay-mastercard.png";
import SelectOffer from "../../components/SelectOffer/SelectOffer";
import { CABINET_ROUTE } from "../../routers/routes";
import CardList from "./components/CardList/CardList";
import CalcMonay from "./components/CalcMonay/CalcMonay";
import {PROMOTIONS} from "../../constants/promotions";
import { IData } from "../../interface/interface";
import { IStatePrice } from "./interface/interface";
import Error from "../Error/Error";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useState, useCallback } from "react";

type TCards = Record<"img", string>;

const CARDS: TCards[] = [
  { img: paySystemCard },
  { img: paySystemCard },
  { img: paySystemCard },
  { img: paySystemCard },
];

export default function Pay(): JSX.Element {
  const data = useAppSelector(state => state.user);

  const [valuePrice, setValuePrice] = useState<IStatePrice>({
    field: "",
    percent: 0,
    bonus: 0,
  });

  const onGetBonus = useCallback((price: number, percent: number) => {
    const percentBonus: string = "1." + String(percent);
    const bonus: number = price * Math.abs(Number(percentBonus));
    const result: number = Number(bonus.toFixed(0));
    setValuePrice((prevState) => {
      const newValue = { ...prevState };
      newValue.field = String(price);
      newValue.percent = percent;
      newValue.bonus = result;
      return newValue;
    });
  }, []);

  if (data && data.user) {
    const dataUser: IData = data.user;
    return (
      <main className={gStyles.page}>
        <section className={styles.pay}>
          <UserHeader
            title="Личный кабинет"
            text="Пополнение баланса"
            avatar={dataUser ? dataUser.avatar : ""}
            path={CABINET_ROUTE}
          />
          <div className={`${styles.content} ${gStyles.containerContent}`}>
            <SelectOffer
              list={PROMOTIONS}
              onSetValue={onGetBonus}
              className={styles.payPromotions}
            />
            <div className={styles.section}>
              <CalcMonay
                promotions={PROMOTIONS}
                setValue={setValuePrice}
                value={valuePrice}
              />
            </div>
            <div className={styles.section}>
              <h2 className={`${styles.choicePaySystem} ${gStyles.textBig}`}>
                Выберите платёжную систему
              </h2>
              <ul className={styles.listCard}>
                <CardList list={CARDS} />
              </ul>
            </div>
          </div>
        </section>
      </main>
    );
  } else {
    return <Error/>;
  }
}
