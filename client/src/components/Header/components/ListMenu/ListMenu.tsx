import styles from "./style.module.scss";
import { NavLink } from "react-router-dom";

interface IProps {
  list: {
    name: string;
    icon: string;
    to: string;
  }[];
  hungleClick: () => void;
}

export default function ListMenu(props: IProps): JSX.Element {
  let { list, hungleClick } = props;
  return (
    <>
      {list.map((item, _) => (
        <li key={item.name} className={styles.item}>
          <NavLink
            onClick={hungleClick}
            className={styles.itemNavigator}
            to={item.to}
          >
            <img className={styles.itemIcon} src={item.icon} alt="" />
            <p>{item.name}</p>
          </NavLink>
        </li>
      ))}
    </>
  );
}
