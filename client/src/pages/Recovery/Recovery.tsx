import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import imageMain from "../../assets/images/global/minacraft-image-main.jpg";
import iconRecovery from "../../assets/images/page/Recovery/recovery-icon-recovery.svg";
import { urlBd } from "../../configs/urls";
import SendRecovery from "./components/SendRecovery/SendRecovery";

export default function Recovery(): JSX.Element {
    return (
      <main className={gStyles.page}>
        <section className={styles.recovery}>
          <div className={styles.header}>
            <img className={styles.image} src={imageMain} alt="" />
            <div className={styles.wrapper}>
              <img
                className={styles.icon}
                src={iconRecovery}
                alt="iconRecovery"
              />
              <div className={styles.bodyInfo}>
                <h1 className={`${styles.title} ${gStyles.titleBig}`}>Восстановление пароля</h1>
                <p className={gStyles.subtitleNormal}>
                  Забыли пароль? Не беда! его легко восстановить
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.content} ${gStyles.containerContent}`}>
            <p className={`${styles.text} ${gStyles.textSmall}`}>
              Для восстановления вашего пароля с аккаунта, вам необходимо ввести
              той email который вы указывали при регистрции аккаунта. Если
              все-таки вы не смогли восстановить аккаунт, пожалуйста обратитесь
              к{" "}
              <a target="_blank" href="https://vk.com/im?media=&sel=-224754509">
                тех.поддержке
              </a>
            </p>
            <SendRecovery url={urlBd} />
          </div>
        </section>
      </main>
    );
}
