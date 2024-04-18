import styles from './style.module.scss';
import gStyles from '../../../../styles/style.module.scss';
import { NEWS } from "../../../../constants/news";

export default function NewsList(): JSX.Element {
  return (
    <>
      {NEWS.map((item, index) => (
        <li key={index} className={styles.item}>
          <h3 className={`${styles.title} ${gStyles.titleMedium}`}>{item.title}</h3>
          <img className={styles.img} src={item.img} alt="" />
          <div className={styles.content}>
            <p className={`${styles.description} ${gStyles.descriptionBig}`}>{item.description}</p>
            <div className={styles.info}>
              <time className={styles.date} dateTime={item.date}>
                {item.date}
              </time>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
