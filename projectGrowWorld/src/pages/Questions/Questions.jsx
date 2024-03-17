import React from "react";
import "./Questions.css";
import "./QuestionsMediaStyle.css";
import iconTechical from "../../assets/images/global/icon-technical.svg"
import iconGame from "../../assets/images/global/icon-game.svg";
import iconCommon from '../../assets/images/global/icon-common.svg';
import Points from "../../containes/Points/Points.jsx";
import imageMain from "../../assets/images/page/Questions/questions-image-main.jpg";
import Accordion from "../../components/ui/accordion/Accordion";

export default function Questions(props) {
  return (
    <main className="page">
      <section className="questions">
        <div className="questions__body">
          <img src={imageMain} alt="" />
          <div className="questions__body-info">
            <h1 className="question__title title">Ответы на вопросы:</h1>
            <p className="questions__subtitle subtitle">
              В этом раздел есть ответы на часто задаваемые вопросы. Поищите
              может вы найдете что-то полезное для себя
            </p>
          </div>
        </div>
        <div className="questions__content container-content">
          <div className="questions__body-section">
            <Points
              className="questions__go-section"
              pointName={"Технические"}
              image={iconTechical}
              dataTp='technical-questions'
            />
            <Points
              className="questions__go-section"
              pointName={" Внутринноигровые"}
              image={iconGame}
              dataTp='game-questions'
            />
            <Points
              className="questions__go-section"
              pointName={"Общие"}
              image={iconCommon}
              dataTp='common-questions'
            />
          </div>
          <section className="questions__answers">
            <ul className="questions__lists">
              <li id='technical-questions' className="questions__section-name title-section">Технические:</li>
              <Accordion
                description={[
                  "Для стабильной работы клиента требуется программное обеспечение Java(https://www.java.com/ru/download/) и драйвера последней версии в зависимости от вашего графического устройства. Если проблема с запуском остаётся прежней, то обратитесь в поддержку нашей группы, там вам обязательно помогут!",
                  "Возможно у вас открыто несколько лаунчеров OrangeCraft. Проверьте это в диспетчере задач. Если это так, то закройте их и запустите один лаунчер заново. В противном случае проверьте - можете ли вы авторизироватся на сайте, если нет - скорее всего кто-то получил доступ к вашему аккаунту. Сбросьте пароль и установите новый.",
                ]}
                title={[
                  "Лаунчер не запускается или закрывается при открытии",
                  "Выдает ошибку Bad Login при попытке захода на сервер.",
                ]}
              />
            </ul>
            <ul className="questions__lists">
              <li id='game-questions' className="questions__section-name title-section">Внутринноигровые:</li>
              <Accordion
                description={[
                  'Если вы не согласны с наказанием - напишите жалобу в данный раздел "Жалобы на персонал" вашего сервера на форуме. Если вы осознаете, что вы получили наказание правомерно, но хотели бы уменьшить срок действия вашего наказания - можете подать заявку в раздел "Заявки на разбан" вашего сервера',
                  'К сожалению это нельзя сделать, но вы можете отслеживать "kill list" в верхнем левом углу экрана. Он отображается некоторое время после того, как игрок умер.',
                  "Пропишите команду //sel",
                  "Напишите ваше предложение в discord группе форума",
                  "Мы уже работаем над решением проблемы, не беспокойтесь.",
                  "Перепроверьте заполнение всех полей при создании варпа",
                  "Все найденные баги сообщайте в личные сообщения нашей группы Вконтакте",
                ]}
                title={[
                  "Мне просто так выдали мут/бан",
                  "Можно ли как-то узнать кто меня убил?",
                  "Как убрать территорию, выделенную деревянным топором?",
                  "У меня есть предложение по серверу.",
                  "Сервер лагает, когда всё наладится?",
                  "У меня не получается создать варп, ничего не происходит.",
                  "Я нашёл баг, что делать?",
                ]}
              />
            </ul>
            <ul className="questions__lists">
              <li id='common-questions' className="questions__section-name title-section">Общие:</li>
              <Accordion
                description={[
                  'Если вы не согласны с наказанием - напишите жалобу в данный раздел "Жалобы на персонал" вашего сервера на форуме. Если вы осознаете, что вы получили наказание правомерно, но хотели бы уменьшить срок действия вашего наказания - можете подать заявку в раздел "Заявки на разбан" вашего сервера',
                  'К сожалению это нельзя сделать, но вы можете отслеживать "kill list" в верхнем левом углу экрана. Он отображается некоторое время после того, как игрок умер.',
                  "Пропишите команду //sel",
                  "Напишите ваше предложение в discord группе форума",
                  "Мы уже работаем над решением проблемы, не беспокойтесь.",
                  "Перепроверьте заполнение всех полей при создании варпа",
                  "Все найденные баги сообщайте в личные сообщения нашей группы Вконтакте",
                ]}
                title={[
                  "Мне просто так выдали мут/бан",
                  "Можно ли как-то узнать кто меня убил?",
                  "Как убрать территорию, выделенную деревянным топором?",
                  "У меня есть предложение по серверу.",
                  "Сервер лагает, когда всё наладится?",
                  "У меня не получается создать варп, ничего не происходит.",
                  "Я нашёл баг, что делать?",
                ]}
              />
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
