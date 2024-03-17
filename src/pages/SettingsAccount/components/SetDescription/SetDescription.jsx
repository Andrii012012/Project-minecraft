import React from "react";
import "./setDescriptionStyle.css";
import "./setDescriptionMedia.css";

export default function SetDescription(props) {
  let { options, setValue, value } = props;
  return (
    <>
      <h3 className="settings-profile__opportunity-profile section-title">
        Описаные в профиле:
      </h3>
      <textarea
        className="settings-profile__description-profile"
        value={value[options]}
        onChange={(e) =>
          setValue((prevState) => {
            const newData = { ...prevState };
            newData[options] = e.target.value;
            return newData;
          })
        }
      ></textarea>
    </>
  );
}
