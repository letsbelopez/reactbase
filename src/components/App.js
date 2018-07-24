import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "../routes";
import SignInPage from "./SignInPage";
import Header from "./Header";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import AppProvider from "./AppProvider";
import AccountPage from "./AccountPage";
import DashboardPage from "./DashboardPage";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <React.Fragment>
          <Header tagline="app tagline" />
          <div className="wrapper">
            <Switch>
              <Route exact path={routes.home} component={HomePage} />
              <Route exact path={routes.signIn} component={SignInPage} />
              <Route exact path={routes.account} component={AccountPage} />
              <Route exact path={routes.dashboard} component={DashboardPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
