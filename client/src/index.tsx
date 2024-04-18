import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.module.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ContextUserData } from "./contexts/user";
import { ContextUsersData } from "./contexts/users";
import { ContextCallUser } from "./contexts/getUser";
import { ContextDataServers } from "./contexts/dataServers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextDataServers>
        <ContextCallUser>
          <ContextUserData>
            <ContextUsersData>
              <App />
            </ContextUsersData>
          </ContextUserData>
        </ContextCallUser>
      </ContextDataServers>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
