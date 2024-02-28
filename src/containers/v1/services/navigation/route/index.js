import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useParams,
  useNavigate,
} from "react-router";
// Constants
import { ROUTE } from "../../../constants";

/**
 * Components
 */
import {
  asyncComponent,
  HeaderBar,
  CopyrightFooter,
} from "../../../components";

/**
 * Pages
*/

import WelcomePage from "../../../pages/WelcomePage";
import SubmitJob from "../../../pages/SubmitJob";
import LogoPage from "../../../pages/LogoPage";
import JobSubmitted from "../../../pages/JobSubmitted";

// Styles
import classes from "./index.module.css";

const AsyncNotFoundPage = asyncComponent(() =>
  import("../../../pages/NotFoundPage")
);

const SSOContainer = ({ children }) => {
  const { memid } = useParams();

  return (
    <>
      <HeaderBar />
      <div className={classes.container}>{children}</div>
      <CopyrightFooter />
    </>
  );
};

const SSOContainerNoFooter = ({ children }) => {
  const { memid } = useParams();

  return (
    <>
      <HeaderBar />
      <div className={classes.container}>{children}</div>
     
    </>
  );
};

const PinResetRoutes = ({ pathname, email, confirm }) => {
  return (
    <>
    <Route
       index={true}
        element={
          <LogoPage />
        }
      />

       <Route
        path={ROUTE.MODULE_ROUTE.Welcome}
        element={
          <SSOContainerNoFooter pathname={pathname}>
            <WelcomePage />
          </SSOContainerNoFooter>
        }
      />

      <Route
        path={ROUTE.MODULE_ROUTE.SubmitJob}
        element={
          
            <SubmitJob   />
         
        }
      />

      <Route
        path={ROUTE.MODULE_ROUTE.JobSubmitted}
        element={
          
            <JobSubmitted   />
         
        }
      />
    </>
  );
};

const SSORoutes = () => {
  const location = useLocation();

  const { pathname = "", state = {} } = location;

  const email = state && state.email;
  const confirm = state && state.confirm;

  // const auth = useSelector((state) => state.root.auth);

  return (
    <>
      <Routes>
        {PinResetRoutes({ pathname, email, confirm })}

        <Route element={<AsyncNotFoundPage />} />
      </Routes>
    </>
  );
};

export default SSORoutes;
