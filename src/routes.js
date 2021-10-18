import React from "react";
import { Route, Switch } from "react-router";
import Login from "./screens/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/surveys">
        <div>surveys</div>
      </Route>
      <Route exact path="/login" component={Login} />
      <Route exact path="/">
        <div>home</div>
      </Route>
      <Route path="/*">
        <div>page not found</div>
      </Route>
    </Switch>
  );
};

export default Routes;
