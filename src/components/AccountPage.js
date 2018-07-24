import React from "react";
import { AppContext } from "./AppProvider";
import UpdatePasswordForm from "./UpdatePasswordForm";
import withAuthorization from "./withAuthorization";

const AccountPage = () => {
  return (
    <AppContext.Consumer>
      {context => (
        <div className="card">
          <h1>Account Page For: {context.state.authUser.email}</h1>
          <UpdatePasswordForm />
        </div>
      )}
    </AppContext.Consumer>
  );
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
