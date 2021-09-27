import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppLayout from "layouts/app-layout";
import { APP_PREFIX_PATH } from "configs/AppConfig";

export const Views = (props) => {
  const { token } = props;

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={APP_PREFIX_PATH} />
      </Route>
      <Route path={APP_PREFIX_PATH}>
        <AppLayout />
      </Route>
    </Switch>
  );
};

export default withRouter(Views);
