import React, { Component } from "react";

import Welcome from "./welcome/welcome";
import UserHome from './userHome/UserHome';

class MainScreen extends Component {
  state = { isUserLogined: true };

  handleUserLogin = () => {
    this.setState({ isUserLogined: true });
  };
  render() {
    if (this.state.isUserLogined) return <UserHome />;
    else return <Welcome handleLogin={this.handleUserLogin} />;
  }
}

export default MainScreen;
