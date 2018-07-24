import React from "react";
import { authenticateWithProvider } from "../auth";
import routes from "../routes";
import base from "../base";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

class SignInPage extends React.Component {
  handleAuth = provider => {
    authenticateWithProvider(provider)
      .then(authUser => {
        base.post(`users/${authUser.user.uid}`, {
          data: { email: authUser.user.email },
          then(err) {
            if (err) {
              console.err(err);
            }
          }
        });
      })
      .then(() => this.props.history.push(routes.dashboard));
  };

  render() {
    return (
      <div className="row">
        <div className="col-4">
          <div className="card">
            <h2>Sign In</h2>
            <SignInForm history={this.props.history} />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <h2>Sign Up</h2>
            <SignUpForm history={this.props.history} />
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <h2>Reset Password</h2>
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignInPage;
