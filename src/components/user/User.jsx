import React, { Component } from "react";

import UserSideBar from "./UserSideBar";
import UserNavBar from "./UserNavBar";
import InputModal from "../InputModal";

import Code from "../Code";

class User extends Component {
  state = { sideBarVisible: true, createProjectModalVisible: false };

  switchProjectModalVisible = action => {
    if (action === 1) this.setState({ createProjectModalVisible: true });
    else this.setState({ createProjectModalVisible: false });
  };
  switchSideBar = () => {
    this.setState(prevState => ({ sideBarVisible: !prevState.sideBarVisible }));
  };
  render() {
    return (
      <div>
        <InputModal
          visible={this.state.createProjectModalVisible}
          inputPlaceHolder={"Enter the name of New Project"}
          ButtonName={"Create"}
          switchProjectModalVisible={this.switchProjectModalVisible}
        />
        <UserNavBar
          switchSideBar={this.switchSideBar}
          switchProjectModalVisible={this.switchProjectModalVisible}
        />
        <UserSideBar sideBarVisible={this.state.sideBarVisible}>
          <Code />
        </UserSideBar>
      </div>
    );
  }
}

export default User;
