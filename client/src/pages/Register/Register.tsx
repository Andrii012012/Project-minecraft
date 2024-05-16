import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import imageMain from "../../assets/images/page/Register/register-image-main.png";
import incoFilling from "../../assets/images/global/icon-filling-data.svg";
import { urlResiterDB } from "../../configs/urls";
import AccessClosed from "../../components/AccessClosed/AccessClosed";
import { SendData } from "./components/SendData/SendData";
import { useAppSelector } from "../../hooks/useAppSelector";

export default function Register(): JSX.Element {
  const data = useAppSelector(state => state.user);

  if (!(data.status === 'success')) {
    return (
      <main className={gStyles.page}>
        <section className={styles.register}>
          <div className={styles.header}>
            <div className={styles.image}>
              <img src={imageMain} alt="" />
            </div>
            <div className={styles.body}>
              <img className={styles.icon} src={incoFilling} />
              <div className={styles.bodyInfo}>
                <h1 className={`${styles.title} ${gStyles.titleBig}`}>
                  Регистрация
                </h1>
                <p className={gStyles.subtitleNormal}>
                  Впишитесь в нашу общую историю!
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.content} ${gStyles.containerContent}`}>
            <SendData
              url={urlResiterDB}
            />
          </div>
        </section>
      </main>
    );
  } else {
    return <AccessClosed userHeader={false} />;
  }
}
