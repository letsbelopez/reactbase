import React from "react";
import firebase from "firebase";

// Make a new context
export const AppContext = React.createContext();

// Then make a new provider component
export default class AppProvider extends React.Component {
  state = {
    authUser: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      // on signout authUser becomes null
      if (authUser) {
        this.setState({ authUser });
      } else {
        this.setState({ authUser: null });
      }
    });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
