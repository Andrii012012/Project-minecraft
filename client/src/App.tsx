import "./styles/style.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import PageLayout from "./pageLayout/PageLayout";
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
} from "./routers/routes";
const Loading = lazy(() => import("./pages/Loading/Loading"));
const Home = lazy(() => import("./pages/Home/Home"));
const Rules = lazy(() => import("./pages/Rules/Rules"));
const GoGame = lazy(() => import("./pages/GoGame/GoGame"));
const Register = lazy(() => import("./pages/Register/Register"));
const DowloadLauncher = lazy(
  () => import("./pages/DowloadLauncher/DowloadLauncher")
);
const Questions = lazy(() => import("./pages/Questions/Questions"));
const TeamProject = lazy(() => import("./pages/TeamProject/TeamProject"));
const SettingsAccount = lazy(
  () => import("./pages/SettingsAccount/SettingsAccount")
);
const Recovery = lazy(() => import("./pages/Recovery/Recovery"));
const ProfileUser = lazy(() => import("./pages/ProfileUser/ProfileUser"));
const ProfileUsers = lazy(() => import("./pages/ProfileUsers/ProfileUsers"));
const Cabinet = lazy(() => import("./pages/Сabinet/Cabinet"));
const Pay = lazy(() => import("./pages/Pay/Pay"));
const Privilege = lazy(() => import("./pages/Privilege/Privilege"));
const BuyCoins = lazy(() => import("./pages/BuyCoins/BuyCoins"));
const BuyUnban = lazy(() => import("./pages/BuyUnban/BuyUnban"));
const Servers = lazy(() => import("./pages/Servers/Servers"));
const InfoServerTechnoMagic = lazy(
  () => import("./pages/InfoServerTechnoMagic/InfoServerTechnoMagic")
);
const OpportunityPrivilege = lazy(
  () => import("./pages/OpportunityPrivilege/OpportunityPrivilege")
);
const Error = lazy(() => import("./pages/Error/Error"));

function App(): JSX.Element {
  useLayoutEffect((): void => {
    document.documentElement.scrollTo(0, 0);
  }, []);
  return (
    <PageLayout>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={GOGOME_ROUTE} element={<GoGame />} />
          <Route path={CABINET_ROUTE} element={<Cabinet />} />
          <Route path={CABINET_BANK_ROUTE} element={<BuyCoins />} />
          <Route path={CABINET_PAY_ROUTE} element={<Pay />} />
          <Route path={CABINET_GROUP_ROUTE} element={<Privilege />} />
          <Route path={CABINET_BUY_UNBAN_ROUTE} element={<BuyUnban />} />
          <Route path={PROFILE_ROUTE} element={<ProfileUser />} />
          <Route path={SETTINGSACCOUNT_ROUTE} element={<SettingsAccount />} />
          <Route path={DOWNLOADLAUNCHER_ROUTE} element={<DowloadLauncher />} />
          <Route path={QUESTIONS_ROUTE} element={<Questions />} />
          <Route path={TEAMPROJECT_ROUTE} element={<TeamProject />} />
          <Route path="/profile/:id" element={<ProfileUsers />} />
          <Route path={RULES_ROUTE} element={<Rules />} />
          <Route path={SERVERS_ROUTE} element={<Servers />} />
          <Route path={RECOVERY_ROUTE} element={<Recovery />} />
          <Route path={REGISTER_ROUTE} element={<Register />} />
          <Route
            path={INFO_SERVER_TECHNOMAGIC_ROUTE}
            element={<InfoServerTechnoMagic />}
          />
          <Route
            path={OPPORTUNITY_PRIVILEGE_ROUTE}
            element={<OpportunityPrivilege />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </PageLayout>
  );
}

export default App;
