import React, { Component } from "react";
import axios from "axios";

import LoginModal from "../login/Login";
import NavBarWelcome from "./NavBarWelcome";
import RegisterModal from "../register/Register";

// general ip
const machine =
  window.location.protocol + "//" + window.location.hostname + ":" + 5000;

class Welcome extends Component {
  state = {
    server: machine,
    isLoginModalOpen: false,
    isRegisterModalOpen: false
  };

  // handlers

  handleLoginModal = action => {
    if (action === 1) this.setState({ isLoginModalOpen: true });
    else this.setState({ isLoginModalOpen: false });
  };

  // server request login
  handleUserLogin = async data => {
    await axios.post(this.state.server + "/login", { data }).then(res => {
      if (res.data === "nope") alert("credentials incorrect");
      else this.props.handleLogin(res.data);
    });
  };

  handleRegisterModal = action => {
    if (action === 1) this.setState({ isRegisterModalOpen: true });
    else this.setState({ isRegisterModalOpen: false });
  };

  // server request register
  handleRegisterUser = async data => {
    await axios.post(this.state.server + "/register", { data }).then(res => {
      if (res.data === "done") alert("user registered");
    });
  };

  render() {
    return (
      <div>
        <LoginModal
          isOpen={this.state.isLoginModalOpen}
          handleLoginModal={this.handleLoginModal}
          handleUserLogin={this.handleUserLogin}
        />

        <RegisterModal
          isOpen={this.state.isRegisterModalOpen}
          handleRegisterModal={this.handleRegisterModal}
          handleRegisterUser={this.handleRegisterUser}
        />
        <NavBarWelcome
          handleLoginModal={this.handleLoginModal}
          handleRegisterModal={this.handleRegisterModal}
        />
      </div>
    );
  }
}

export default Welcome;
