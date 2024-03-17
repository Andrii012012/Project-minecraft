import React from "react";
import "./changeUserListStyle.css";
import "./changeUserListMedia.css";

export default function ChangeUserList(props) {
  let { list, setValue } = props;
  return (
    <ul className="settings-profile__body">
      {list.map((item, index) => (
        <li key={index} className="settings-profile__body-settings">
          <h3 className="settings-profile__title title-section">
            {item.title}
          </h3>
          <p className="settings-profile__description text">
            {item.description}
          </p>
          <div className="settings-profile__download">
            <input
              type="file"
              onChange={(e) =>
                setValue((prevState) => {
                  const newSettings = { ...prevState };
                  newSettings[item.change] = e.target.files[0];
                  return newSettings;
                })
              }
              name={item.name}
              accept="image/*,.png,.jpg,.gif,.web,"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
