import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";

import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    0: "#f80000",
  },
});

const Home = lazy(() => import("./pages/home"));
const Browse = lazy(() => import("./pages/browse"));
const SignIn = lazy(() => import("./pages/signin"));
const SignUp = lazy(() => import("./pages/signup"));
const Movie = lazy(() => import("./pages/singlemovie"));
const TV = lazy(() => import("./pages/singletv"));
const NotFound = lazy(() => import("./pages/notfound"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<TopBarProgress />}>
        <Switch>
          <Route path={ROUTES.HOME} exact component={Home} />
          <Route path={ROUTES.BROWSE} exact component={Browse} />
          <Route path={ROUTES.SIGN_IN} exact component={SignIn} />
          <Route path={ROUTES.SIGN_UP} exact component={SignUp} />
          <Route path={ROUTES.SINGLE_MOVIE} exact component={Movie} />
          <Route path={ROUTES.SINGLE_TV} exact component={TV} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}
