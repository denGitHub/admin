
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";
const App = props => {
  //const { isAuth } = props;
  const isAuth=false;
  return (
    <div >
      <Switch>
        <Route
          exact
          path={["/signin", "/signup"]}
          component={Auth}
        />
        <Route
          path="/"
          render={() => (isAuth ? <Admin /> : <Redirect to="/signin" />)}
        />
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </div>
  );
};

export default App;
