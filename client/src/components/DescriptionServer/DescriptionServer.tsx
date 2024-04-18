import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../styles/style.module.scss";
import Social from "../ui/Social/Social";
import InfoAboutServer from "./components/InfoAboutServer/InfoAboutServer";
import InfoModes from "./components/InfoModes/InfoModes";
import { IInfoMods, IInfoServer } from "../../constants/infoServerMainCraft";

interface IProps {
  imageMain: string;
  server: string | undefined;
  description: string | undefined;
  infoMods: IInfoMods[] | undefined;
  informationServer: IInfoServer[] | undefined;
}

function DescriptionServer(props: IProps): JSX.Element {
  let {
    imageMain = "",
    server,
    description,
    infoMods = [],
    informationServer = [],
  } = props;

  return (
    <main className={gStyles.page}>
      <section className={styles.infoServer}>
        <div className={styles.header}>
          <img className={styles.image} src={imageMain} alt="" />
          <div className={styles.headerBody}>
            <h1 className={`${gStyles.title} ${gStyles.titleBig}`}>{server}</h1>
          </div>
        </div>
        <div className={`${styles.content} ${gStyles.containerContent}`}>
          <section className={styles.aboutServer}>
            <table className={styles.serverInfo}>
              <InfoAboutServer list={informationServer} />
            </table>
          </section>
          <p className={`${styles.description} ${gStyles.descriptionBig}`}>{description}</p>
          <Social className={styles.social} />
          <section className={styles.aboutMods}>
            <h2 className={`${styles.listMods} ${gStyles.sectionName}`}>Список модов:</h2>
            <ul className={styles.modsList}>
              <InfoModes list={infoMods} />
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}

export default DescriptionServer;
