import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import User from "../components/user/User";
import Api from "../components/api/Api";

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        restricted={false}
        component={() => <>default page</>}
      />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/api" component={Api} />
      <PrivateRoute path="/user" component={User} />
    </Switch>
  );
};

export default Routes;
