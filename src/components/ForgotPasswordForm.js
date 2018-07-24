import React from "react";
import { resetPassword } from "../auth";

const initialState = {
  email: "",
  error: null
};

class ForgotPasswordForm extends React.Component {
  state = { ...initialState };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  resetPassword = e => {
    e.preventDefault();
    resetPassword(this.state.email)
      .then(() => {
        this.setState({ ...initialState });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { email, error } = this.state;
    return (
      <form onSubmit={this.resetPassword}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          onChange={this.handleChange}
          value={email}
        />
        <button type="submit">submit</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default ForgotPasswordForm;
