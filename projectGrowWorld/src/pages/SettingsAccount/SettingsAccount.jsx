import React from "react";
import "./SettingsAccount.css";
import { useContext, useEffect, useState } from "react";
import { UserData } from "../../contexts/user";
import Security from "./pages/Security/Security";
import SettingsProfile from "./pages/SettingsProfile/SettingsProfile";
import lock from '../../assets/images/page/SettingsAccount/setting-account-icon-lock.svg';
import safety from '../../assets/images/page/SettingsAccount/setting-account-icon-safety.svg';

export default function SettingsAccount(props) {
  const contextDataUser = useContext(UserData);
  const dataUser = contextDataUser[2];
   const loading = dataUser.loading;
  const setDataUser = contextDataUser[0];
  const [user, setUser] = useState(dataUser);
   const [changeMain, setChangeMain] = useState(0);

  const mains = [{text: 'Настройки аккаунта', image: safety}, {text: 'Безопасность', image: lock}];

  useEffect(() => {
    setUser(() => {
      return dataUser;
    });
  }, [dataUser]);

  if (user.user) {
    let { login = "name", avatar } = user.user;
    return (
      <main className="page">
        <section className="settings">
          <div className="settings__header">
            <div className="settings__user">
              <div className="settings__avatar avatar">
                  <img
                    src={require(`../../assets/upload/avatars/${avatar}`)}
                    alt="image"
                  />
              </div>
              <div className="settings__body">
                <h1 className="settings__title title-section">Настройки аккаунта</h1>
                <p className="settings__greetings title-section">Добро пожаловать, {login}</p>
              </div>
            </div>
          </div>
          <div className="settings-profile__content container-content">
            <div className="settings__navigator">
               {mains.map((item, index) => {
                  return (
                     <div className='settings__poin' onClick={() => setChangeMain(index)}>
                        <img className='settings__image-point' src={item.image} alt="" />
                        <p className='settings__text-point'>{item.text}</p>
                     </div>
                  )
               })}
            </div>
            {changeMain === 0 ?  <SettingsProfile user={user} funcPost={setDataUser} loading={loading}/> : <Security funcPost={setDataUser} loading={loading} user={user}/>}
          </div>
        </section>
      </main>
    );
  }
}
