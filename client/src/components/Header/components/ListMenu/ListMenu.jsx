import "./listMenuStyle.css";
import "./listMenuMedia.css";
import { NavLink } from "react-router-dom";

export default function ListMenu(props) {
  let { list, hungleClick } = props;
  return (
    <>
      {list.map((item, _) => (
        <li key={item.name} className="header__item">
          <NavLink
            onClick={hungleClick}
            className="header__item-navigator"
            to={item.to}
          >
            <img className="header__item-icon" src={item.icon} alt="" />
            <p>{item.name}</p>
          </NavLink>
        </li>
      ))}
    </>
  );
}
