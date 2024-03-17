import showAlert from "./showAlert";
import {
  REPEAET_PASSWORD_ERROR,
  LOGIN_LENGTH_ERROR_MAX,
  LOGIN_LENGTH_ERROR_MIN,
  PASSWORD_LENGTH_ERROR_MIN,
  EMAIL_ERROR,
} from "../constants/massage.js";

let saveColorBorder = null;

function changeBorder(item, time = 4000) {
  const colorBorder = getComputedStyle(item).border;
  const stylesBorder = colorBorder.split(" ");
  let color = [];
  for (let i = 2; i < stylesBorder.length; i++) {
    color.push(stylesBorder[i]);
  }
  color = color.join("");
  saveColorBorder = color;

  item.style.border = "1px solid red";

  setTimeout(() => {
    item.style.border = `${saveColorBorder}`;
  }, time);
}

let validationField = {
  login: false,
  password: false,
  email: false,
  repeatPassword: false,
};

const isFine = [];

function validation(inputs) {
  if (inputs.length > 0) {
    let passwordValue = null;
    inputs.forEach((item, _) => {
      switch (item.name) {
        case "login": {
          if (item.value.length < 5) {
            changeBorder(item);
            showAlert(LOGIN_LENGTH_ERROR_MIN);
            validationField.login = false;
          } else if (item.value.length >= 18) {
            showAlert(LOGIN_LENGTH_ERROR_MAX);
            validationField.login = false;
          } else {
            validationField.login = true;
          }
          break;
        }
        case "password": {
          if (item.value.length < 6) {
            changeBorder(item);
            showAlert(PASSWORD_LENGTH_ERROR_MIN);
            validationField.password = false;
          } else {
            validationField.password = true;
            passwordValue = item.value;
          }
          break;
        }
        case "repeatPassword": {
          if (item.value !== passwordValue) {
            changeBorder(item);
            showAlert(REPEAET_PASSWORD_ERROR);
            validationField.repeatPassword = false;
          } else {
            validationField.repeatPassword = true;
          }
          break;
        }
        case "email": {
          var validationEmail =
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
          if (!validationEmail.test(String(item.value).toLowerCase())) {
            changeBorder(item);
            showAlert(EMAIL_ERROR);
            validationField.email = false;
          } else {
            validationField.email = true;
          }
          break;
        }
      }
    });
    isFine.length = 0;
    for (let key in validationField) {
      isFine.push(validationField[key]);
    }
    return !isFine.includes(false);
  }
}

export { validation };
