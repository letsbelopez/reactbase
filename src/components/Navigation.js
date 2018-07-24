import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton";
import { AppContext } from "./AppProvider";
import routes from "../routes";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to={routes.home}>Home</Link>
        </li>
        <AppContext.Consumer>
          {context =>
            context.state.authUser ? (
              <React.Fragment>
                <li className="nav-link">
                  <Link to={routes.dashboard}>Dashboard</Link>
                </li>
                <li className="nav-link">
                  <Link to={routes.account}>Account</Link>
                </li>
                <li className="nav-link">
                  <SignOutButton />
                </li>
              </React.Fragment>
            ) : (
              <li className="nav-link">
                <Link to={routes.signIn}>Sign in</Link>
              </li>
            )
          }
        </AppContext.Consumer>
      </ul>
    </nav>
  );
};

export default Navigation;
