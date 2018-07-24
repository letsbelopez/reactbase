import React from "react";
import withAuthorization from "./withAuthorization";
import { AppContext } from "./AppProvider";
import base from "../base";

class DashboardPage extends React.Component {
  state = {
    users: {}
  };

  componentDidMount() {
    this.ref = base.syncState(`users`, {
      context: this,
      state: "users"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <React.Fragment>
        <AppContext.Consumer>
          {context => (
            <div className="card">
              <h2>
                Welcome {context.state.authUser.email} to the App Dashboard
              </h2>
            </div>
          )}
        </AppContext.Consumer>
        <div className="card">
          <h2>App Users</h2>
          <ul>
            {Object.keys(this.state.users).map(key => (
              <li key={key}>{this.state.users[key].email}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(DashboardPage);
