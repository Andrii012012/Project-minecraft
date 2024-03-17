import "./style.css";
import "./mediaStyle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { PageLayout } from "./layouts/PageLayout.jsx";
import { Route, Routes } from "react-router-dom";
import { useLayoutEffect } from "react";
import Home from "./pages/Home/Home.jsx";
import Rules from "./pages/Rules/Rules.jsx";
import GoGame from "./pages/GoGame/GoGame.jsx";
import Register from "./pages/Register/Register.jsx";
import DowloadLauncher from "./pages/DowloadLauncher/DowloadLauncher.jsx";
import Questions from "./pages/Questions/Questions.jsx";
import TeamProject from "./pages/TeamProject/TeamProject.jsx";
import SettingsAccount from "./pages/SettingsAccount/SettingsAccount.jsx";
import Recovery from "./pages/Recovery/Recovery.jsx";
import ProfileUser from "./pages/ProfileUser/ProfileUser.jsx";
import {
  HOME_ROUTE,
  RULES_ROUTE,
  GOGOME_ROUTE,
  REGISTER_ROUTE,
  DOWNLOADLAUNCHER_ROUTE,
  QUESTIONS_ROUTE,
  TEAMPROJECT_ROUTE,
  SETTINGSACCOUNT_ROUTE,
  RECOVERY_ROUTE,
  PROFILE_ROUTE,
  CABINET_ROUTE,
  CABINET_PAY_ROUTE,
  CABINET_GROUP_ROUTE,
  CABINET_BANK_ROUTE,
  CABINET_BUY_UNBAN_ROUTE,
  SERVERS_ROUTE,
  INFO_SERVER_TECHNOMAGIC_ROUTE,
  OPPORTUNITY_PRIVILEGE_ROUTE,
} from "./routers/routes.jsx";
import ProfileUsers from "./pages/ProfileUsers/ProfileUsers.jsx";
import Cabinet from "./pages/Сabinet/Cabinet.jsx";
import Pay from "./pages/Pay/Pay.jsx";
import Privilege from "./pages/Privilege/Privilege.jsx";
import BuyCoins from "./pages/BuyCoins/BuyCoins.jsx";
import BuyUnban from "./pages/BuyUnban/BuyUnban.jsx";
import Servers from "./pages/Servers/Servers.jsx";
import InfoServerTechnoMagic from "./pages/InfoServerTechnoMagic/InfoServerTechnoMagic.jsx";
import OpportunityPrivilege from "./pages/OpportunityPrivilege/OpportunityPrivilege.jsx";

function App() {
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} exact />
        <Route path={RULES_ROUTE} element={<Rules />} />
        <Route path={GOGOME_ROUTE} element={<GoGame />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
        <Route path={DOWNLOADLAUNCHER_ROUTE} element={<DowloadLauncher />} />
        <Route path={QUESTIONS_ROUTE} element={<Questions />} />
        <Route path={TEAMPROJECT_ROUTE} element={<TeamProject />} />
        <Route path={SETTINGSACCOUNT_ROUTE} element={<SettingsAccount />} />
        <Route path={RECOVERY_ROUTE} element={<Recovery />} />
        <Route path={PROFILE_ROUTE} element={<ProfileUser />} />
        <Route path={CABINET_ROUTE} element={<Cabinet />} />
        <Route path={CABINET_PAY_ROUTE} element={<Pay />} />
        <Route path={CABINET_GROUP_ROUTE} element={<Privilege />} />
        <Route path={CABINET_BANK_ROUTE} element={<BuyCoins />} />
        <Route path={CABINET_BUY_UNBAN_ROUTE} element={<BuyUnban />} />
        <Route path={SERVERS_ROUTE} element={<Servers />} />
        <Route
          path={INFO_SERVER_TECHNOMAGIC_ROUTE}
          element={<InfoServerTechnoMagic />}
        />
        <Route
          path={OPPORTUNITY_PRIVILEGE_ROUTE}
          element={<OpportunityPrivilege />}
        />
        <Route path="/profile/:id" element={<ProfileUsers />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
