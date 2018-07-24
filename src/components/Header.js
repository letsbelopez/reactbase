import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./Navigation";

export class Header extends Component {
  static propTypes = {
    tagline: PropTypes.string.isRequired
  };

  render() {
    return (
      <header className="header">
        <div className="header__left">
          <h1>App Title</h1>
          <span className="tagline">{this.props.tagline}</span>
        </div>
        <div className="header__right">
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
