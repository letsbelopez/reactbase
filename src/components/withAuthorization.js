import React from "react";
import firebase from "firebase";
import { withRouter } from "react-router-dom";
import { AppContext } from "./AppProvider";
import routes from "../routes";

const withAuthorization = authCondition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth().onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push(routes.signIn);
        }
      });
    }

    render() {
      return (
        <AppContext.Consumer>
          {context => (context.state.authUser ? <Component /> : null)}
        </AppContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
};

export default withAuthorization;
