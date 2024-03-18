import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ContextUserData } from "./contexts/user";
import { ContextUsersData } from "./contexts/users";
import { ContextCallUser } from "./contexts/getUser";
import { ContextDataServers } from "./contexts/dataServers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
);

reportWebVitals();
