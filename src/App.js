import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Browse from "./pages/browse";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import SingleMovie from "./pages/singlemovie";
import NotFound from "./pages/notfound";

import * as ROUTES from "./constants/routes";
import SingleTV from "./pages/singletv";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.HOME} exact>
          <Home />
        </Route>
        <Route path={ROUTES.BROWSE} exact>
          <Browse />
        </Route>
        <Route path={ROUTES.SIGN_IN} exact>
          <SignIn />
        </Route>
        <Route path={ROUTES.SIGN_UP} exact>
          <SignUp />
        </Route>
        <Route path={ROUTES.SINGLE_MOVIE} exact>
          <SingleMovie />
        </Route>
        <Route path={ROUTES.SINGLE_TV} exact>
          <SingleTV />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
