import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import imageMain from "../../assets/images/page/Profile/profile-image-main.png";
import OnlineServers from "./components/OnlineServers/OnlineServers";
import UserData from "./components/UserData/UserData";
import ShowUserStatus from "./components/ShowUserStatus/ShowUserStatus";
import { IData } from "../../interface/interface";

interface IInfoUser {
  text: string;
  info: string | number;
}

export default function Profile(props: { userData: IData }): JSX.Element {
  let { userData } = props;

  if (userData) {
    let {
      avatar,
      login: name,
      servers = [],
      date,
      short_description,
    } = userData;

    if (servers === null) servers = [];

    const birthday: number =
      (new Date().getTime() - Number(new Date(Number(date)))) / 1000 / 60 / 60 / 24;

    const days: string = birthday.toFixed(0);


    const infoUser: IInfoUser[] = [
      {
        text: "С момента регистрации прошло:",
        info: `${days} дней`,
      },
      {
        text: "количество привилегий на серверах:",
        info: servers.length,
      },
    ];

    return (
      <main className={gStyles.page}>
        <section className={styles.profile}>
          <div className={styles.header}>
            <img className={styles.imageMain} src={imageMain} alt="" />
            <div className={styles.bodyUser}>
              <div className={`${styles.avatar} ${gStyles.avatar}`}>
                <img
                  src={require(`../../assets/upload/avatars/${avatar}`)}
                  alt=""
                />
              </div>
              <ShowUserStatus servers={servers} name={name} />
            </div>
          </div>
          <div className={`${styles.content} ${gStyles.containerContent}`}>
            <p className={styles.description}>
              {short_description ? short_description : 'Без описания'}
            </p>
            <ul className={styles.userData}>
              <UserData list={infoUser} />
            </ul>
            <p className={`${styles.online} ${gStyles.textBig}`}>Онлайн на серверах:</p>
            <ul className={styles.servers}>
              <OnlineServers list={servers} />
            </ul>
          </div>
        </section>
      </main>
    );
  } else {
    return <></>;
  }
}
