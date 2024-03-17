import React from "react";
import "./OpportunityPrivilege.css";
import "./OpportunityPrivilegeMediaStyle.css";
import iconDonate from "../../assets/images/global/icon-donate.png";
import {
  OPPORTUNITY_PRIVILEGE_COMMAND,
  OPPORTUNITY_PRIVILEGE,
  ADDITIONAL_OPPORTUNITY_PRIVILEGE,
  ADDITIONAL_OPPORTUNITY_PRIVILEGE_GOODIES,
} from "../../constants/opportunityPrivilege";

const TABLES = [
  {
    header: OPPORTUNITY_PRIVILEGE_COMMAND,
    main: OPPORTUNITY_PRIVILEGE,
  },
  {
    header: ADDITIONAL_OPPORTUNITY_PRIVILEGE_GOODIES,
    main: ADDITIONAL_OPPORTUNITY_PRIVILEGE,
  },
];

export default function OpportunityPrivilege(props) {
  let {} = props;
  return (
    <main className="page">
      <section className="opportunity-privilege">
        <div className="opportunity-privilege__header">
          <div className="opportunity-privilege__body-explain">
            <h1 className="opportunity__title title">Донат услуги проекту</h1>
            <p className="opportunity-privilege__subtitle subtitle">
              Зачем это нужно нам?
            </p>
            <p className="opportunity-privilege__explain text">
              Любому бесплатному проекту необходима помощь его пользователей для
              его развития и улучшения. Мы работаем над ним каждую минуту
              свободного времени, осваиваем новое и надежное оборудование,
              совершенствуем наши серверы, делаем игру приятной и интересной для
              вас. Все это было бы невозможным без вашей поддержки!
            </p>
          </div>
          <img
            className="opportunity-privilege__image"
            src={iconDonate}
            alt=""
          />
        </div>
        <div className="opportunity-privilege__content container-content">
          <section className="privilege-has">
            <h2 className="privilege-has__title title-section">Возможности привилегий:</h2>
            {TABLES.map((item, index) => (
              <div className='privilege-has__body'>
                <table
                  key={index}
                  className="privilege-has__list"
                  cellpadding="0"
                  cellspacing="0"
                >
                  <tbody>
                    <tr>
                      {item.header.map((item, _) => (
                        <th key={item} className="privilege-has__item">
                          {item}
                        </th>
                      ))}
                    </tr>
                  </tbody>
                  <tbody>
                    {item.main.map((item, _) => (
                      <tr>
                        <th key={item.command} className="privilege-has__item">
                          <strong className="privilege-has__command">
                            {item.command}
                          </strong>
                          <p className="privilege-has__description">
                            {item.description}
                          </p>
                        </th>
                        {item.opportunityHas.map((item, _) => {
                          if (String(item).includes("/static/media/")) {
                            return (
                              <th key={item} className="privilege-has__item">
                                <img
                                  className="privilege-has__icon"
                                  src={item}
                                  alt=""
                                />
                              </th>
                            );
                          } else {
                            return (
                              <th key={item} className="privilege-has__item">
                                <p>{item}</p>
                              </th>
                            );
                          }
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}
