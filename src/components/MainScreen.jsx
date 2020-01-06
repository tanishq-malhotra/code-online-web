import React, { Component } from "react";

import Welcome from "./welcome/welcome";
import User from "./user/User";

class MainScreen extends Component {
  state = { isUserLogined: false };

  handleUserLogin = ({ name, id }) => {
    this.setState({ isUserLogined: true });
    localStorage.setItem("name", name);
    localStorage.setItem("id", id);
  };

  componentDidMount = () => {
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");

    if (name && id) this.setState({ isUserLogined: true });
  };
  render() {
    if (this.state.isUserLogined) return <User />;
    else return <Welcome handleLogin={this.handleUserLogin} />;
  }
}

export default MainScreen;
