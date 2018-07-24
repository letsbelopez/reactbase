import React from "react";
import { createUserWithEmailAndPassword } from "../auth";
import PropTypes from "prop-types";
import base from "../base";
import routes from "../routes";

const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  error: null
};

class SignUpForm extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  state = { ...initialState };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authUser => {
        this.setState({ ...initialState });
        base.post(`users/${authUser.uid}`, {
          data: { email: authUser.email },
          then(err) {
            if (err) {
              console.err(err);
            }
          }
        });
        this.props.history.push(routes.account);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { email, password, confirmPassword, error } = this.state;
    const isValid =
      password === confirmPassword &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== "";

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={this.handleChange}
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={this.handleChange}
          name="password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={this.handleChange}
          name="confirmPassword"
        />
        <button type="submit" disabled={!isValid}>
          sign up
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default SignUpForm;
