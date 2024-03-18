import React from "react";
import "./opportunityPrivilegeStyle.css";
import "./opportunityPrivilegeMedia.css";
import iconDonate from "../../assets/images/global/icon-donate.png";
import TableOpportunity from "./components/TableOpportunity/TableOpportunity";

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
            <h2 className="privilege-has__title title-section">
              Возможности привилегий:
            </h2>
            <TableOpportunity />
          </section>
        </div>
      </section>
    </main>
  );
}
