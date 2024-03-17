import React from "react";
import "./SettingsProfile.css";
import "./SettingsProfileMedisStyle.css";
import ButtonSend from "../../../../components/ui/buttonSend/ButtonSend";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { urlBd } from "../../../../configs/urls";

export default function SettingsProfile(props) {
  let { user, funcPost, loading } = props;

  const [settings, setSettings] = useState({
    avatar: "",
    skin: "",
    shortDescription: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, [user.loading]);

  const goHome = useNavigate();

 async function onSubmitData(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("id", user.user.id);
    form.append("avatar", settings.avatar);
    form.append("skin", settings.skin);
    form.append("shortDescription", settings.shortDescription);
    form.append("updata", true);
    let result = await funcPost(urlBd, form);
     console.log(result);
      if(result !== false){
        goHome("/");
        window.location.reload();
    }
  }

  return (
    <form
      onSubmit={onSubmitData}
      className="settings-profile"
      action={urlBd}
      method="post"
      encType="multipart/form-data"
    >
      <div className="settings-profile__wrapper">
        <div className="setting-profile__content">
          <div className="settings-profile__body">
            <div className="settings-profile__body-settings">
              <h3 className="settings-profile__title title-section">Сменить аватарку</h3>
              <p className="settings-profile__description text">
                Аватарка должны быть не меньше 80x80px для адекватной отрисовки
              </p>
              <div className="settings-profile__download">
                <input
                  type="file"
                  onChange={(e) =>
                    setSettings((prevState) => {
                      const newSettings = { ...prevState };
                      newSettings.avatar = e.target.files[0];
                      return newSettings;
                    })
                  }
                  name="avatar"
                  accept="image/*,.png,.jpg,.gif,.web,"
                />
              </div>
            </div>
            <div className="settings-profile__body-settings">
              <h3 className="settings-profile__title title-section">Сменить скин</h3>
              <p className="settings-profile__description text">
                Абсолютно всем доступны все виды скинов для установки!
              </p>
              <div className="settings-profile__download">
                <input
                  type="file"
                  onChange={(e) =>
                    setSettings((prevState) => {
                      const newSettings = { ...prevState };
                      newSettings.skin = e.target.files[0];
                      return newSettings;
                    })
                  }
                  name="skin"
                  accept="image/*,.png,.jpg,.gif,.web,"
                />
              </div>
            </div>
          </div>
          <h3 className="settings-profile__opportunity-profile section-title">
            Описаные в профиле:
          </h3>
          <textarea
            className="settings-profile__description-profile"
            value={settings.shortDescription}
            onChange={(e) =>
              setSettings((prevState) => {
                const newData = { ...prevState };
                newData.shortDescription = e.target.value;
                return newData;
              })
            }
          ></textarea>
        </div>
        <div className="settings-profile__body-btn">
          <ButtonSend className="settings-profile__btn" text="Сохранить" />
        </div>
      </div>
    </form>
  );
}
