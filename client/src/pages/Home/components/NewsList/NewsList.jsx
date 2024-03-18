import "./newsListStyle.css";
import "./newsListMedia.css";
import { NavLink } from "react-router-dom";
import { NEWS } from "../../../../constants/news";

export default function NewsList(props) {
  let {} = props;
  return (
    <>
      {NEWS.map((item, _) => (
        <li className="news__item">
          <h3 className="news__title">{item.title}</h3>
          <img className="news__img" src={item.img} alt="" />
          <div className="news__content container-content">
            <p className="news__description">{item.description}</p>
            <div className="news__info">
              <time className="news__date" datetime={item.date}>
                {item.date}
              </time>
              <NavLink className="news__btn" to="/">
                Подробно
              </NavLink>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}
