import React, { Component } from "react";

import Welcome from "./welcome/welcome";
import User from "./user/User";

class MainScreen extends Component {
  state = { isUserLogined: false, userInfo: {} };

  componentDidMount = () => {
    const name = localStorage.getItem("name");
    const id = localStorage.getItem("id");
    if (name && id) this.setState({ isUserLogined: true });
  };

  // handlers

  handleUserLogin = data => {
    localStorage.setItem("name", data.name);
    localStorage.setItem("id", data.id);
    this.setState({ isUserLogined: true, userInfo: data });
  };

  handleLogout = () => {
    this.setState({ isUserLogined: false, userInfo: {} });
  };
  render() {
    if (this.state.isUserLogined)
      return (
        <User userInfo={this.state.userInfo} handleLogout={this.handleLogout} />
      );
    else return <Welcome handleLogin={this.handleUserLogin} />;
  }
}

export default MainScreen;
