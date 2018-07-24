import React from "react";
import { updatePassword } from "../auth";

const initialState = {
  password: "",
  confirmPassword: "",
  error: null
};

export class UpdatePassword extends React.Component {
  state = { ...initialState };

  updatePassword = e => {
    e.preventDefault();
    updatePassword(this.state.password)
      .then(() => {
        this.setState({ ...initialState });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const { password, confirmPassword, error } = this.state;
    const isValid =
      password !== "" && confirmPassword !== "" && password === confirmPassword;
    return (
      <div>
        <h2>Update Password</h2>
        <form onSubmit={this.updatePassword}>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="password"
            placeholder="New Password"
            onChange={this.handleChange}
            name="password"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            value={confirmPassword}
            type="password"
            placeholder="Confirm New Password"
            onChange={this.handleChange}
            name="confirmPassword"
          />
          <button type="submit" disabled={!isValid}>
            update
          </button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default UpdatePassword;
