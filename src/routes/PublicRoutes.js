import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { UIContext } from "../_context/UIContext";
import { PublicRoute } from './routes';

const LoginPage= lazy(() => import("../pages/SignInPage"));
const ForgotPasswordPage= lazy(() => import("../pages/ForgotPasswordPage"));

const UnAuthenicated = () => {
  return (
    <Router>
      <p>
        You are not logged in. Please login <Link to="/">here</Link>
      </p>
    </Router>
  );
};

const Routes = (props) => {
  return (
    <Router>
      <Suspense fallback={"loading"}>
        <Switch>
          <UIContext.Provider value={{}}>
            <PublicRoute
                path="/"
                exact
                component={LoginPage}
            />{' '}
            <PublicRoute
                path="/admin/forgotpassword"
                exact
                component={ForgotPasswordPage}
            />{' '}
             <PublicRoute
                path="/tour-operator/forgotpassword"
                exact
                component={ForgotPasswordPage}
            />{' '}
            <PublicRoute
                path="/adminlogin"
                exact
                component={LoginPage}
            />{' '}
          </UIContext.Provider>
        </Switch>
      </Suspense>
    </Router>
  );
};

const PublicRoutes = (props) => {
  return <Routes />;
};

export default PublicRoutes;
