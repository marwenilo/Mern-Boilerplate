import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Test from "../components/test";
// import App from "../App.js"

const AppRouter = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/test" exact component={Test} />
    </Switch>
  </Router>
);

export default AppRouter;
