import "./styles/style.css";
import "./styles/mediaStyle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { PageLayout } from "./layouts/PageLayout.jsx";
import { Route, Routes } from "react-router-dom";
import { useLayoutEffect, lazy, Suspense } from "react";
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
import Loading from "./pages/Loading/Loading.jsx";
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Rules = lazy(() => import("./pages/Rules/Rules.jsx"));
const GoGame = lazy(() => import("./pages/GoGame/GoGame.jsx"));
const Register = lazy(() => import("./pages/Register/Register.jsx"));
const DowloadLauncher = lazy(() =>
  import("./pages/DowloadLauncher/DowloadLauncher.jsx")
);
const Questions = lazy(() => import("./pages/Questions/Questions.jsx"));
const TeamProject = lazy(() => import("./pages/TeamProject/TeamProject.jsx"));
const SettingsAccount = lazy(() =>
  import("./pages/SettingsAccount/SettingsAccount.jsx")
);
const Recovery = lazy(() => import("./pages/Recovery/Recovery.jsx"));
const ProfileUser = lazy(() => import("./pages/ProfileUser/ProfileUser.jsx"));
const ProfileUsers = lazy(() => import("./pages/ProfileUsers/ProfileUsers.jsx"));
const Cabinet = lazy(() => import("./pages/Сabinet/Cabinet.jsx"));
const Pay = lazy(() => import("./pages/Pay/Pay.jsx"));
const Privilege = lazy(() => import("./pages/Privilege/Privilege.jsx"));
const BuyCoins = lazy(() => import("./pages/BuyCoins/BuyCoins.jsx"));
const BuyUnban = lazy(() => import("./pages/BuyUnban/BuyUnban.jsx"));
const Servers = lazy(() => import("./pages/Servers/Servers.jsx"));
const InfoServerTechnoMagic = lazy(() =>
  import("./pages/InfoServerTechnoMagic/InfoServerTechnoMagic.jsx")
);
const OpportunityPrivilege = lazy(() =>
  import("./pages/OpportunityPrivilege/OpportunityPrivilege.jsx")
);
const Error = lazy(() => import("./pages/Error/Error.jsx"));

function App() {
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
      <Suspense fallback={<Loading/>}>
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
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </PageLayout>
  );
}

export default App;
