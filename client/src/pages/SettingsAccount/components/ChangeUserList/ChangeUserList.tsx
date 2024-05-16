import React from "react";
import styles from "./style.module.scss";
import gStyles from "../../../../styles/style.module.scss";
import { TSetSettings, TUserList } from "../../interface/type";

interface IProps {
  list: TUserList[];
  setValue: TSetSettings;
}

export default function ChangeUserList(props: IProps): JSX.Element {
  let { list, setValue } = props;

  function changeValue(
    e: React.ChangeEvent<HTMLInputElement>,
    item: TUserList
  ) {
    setValue((prevState) => {
      const newSettings = { ...prevState };
      if (e.target && e.target.files) {
        newSettings[item.change] = e.target.files[0];
      }
       console.log(newSettings);
      return newSettings;
    });
  }

  return (
    <ul className={styles.list}>
      {list.map((item: TUserList, index: number) => (
        <li key={index} className={styles.bodySettings}>
          <h3 className={`${styles.title} ${gStyles.titleSmall}`}>
            {item.title}
          </h3>
          <p className={`${styles.description} ${gStyles.descriptionMedium}`}>
            {item.description}
          </p>
          <div className={styles.download}>
            <input
              type="file"
              onChange={(e) => changeValue(e, item)}
              name={item.name}
              accept="image/*,.png,.jpg,.gif,.web,"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
