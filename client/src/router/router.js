import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

import Test from "../components/test";
// import App from "../App.js"

const AppRouter = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/test" exact component={Test} />
      <Route path="/login" exact component={Login} />
    *<Route path="/registration" exact component={Register} />
    </Switch>
  </Router>
);

export default AppRouter;
