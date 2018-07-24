import React from "react";
import { signInWithEmailAndPassword } from "../auth";
import PropTypes from "prop-types";
import routes from "../routes";

const initialState = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  };

  state = { ...initialState };

  signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(authUser => {
        this.setState({ ...initialState });
        this.props.history.push(routes.dashboard);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isValid = email !== "" && password !== "";
    return (
      <form onSubmit={this.signIn}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={this.handleChange}
        />
        <button type="submit" disabled={!isValid}>
          sign in
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default SignInForm;
