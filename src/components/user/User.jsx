import React, { Component } from "react";
import axios from "axios";

import UserSideBar from "./UserSideBar";
import UserNavBar from "./UserNavBar";
import InputModal from "../InputModal";

const machine =
  window.location.protocol + "//" + window.location.hostname + ":" + 5000;
class User extends Component {
  state = {
    sideBarVisible: true,
    createProjectModalVisible: false,
    currPath: "/"
  };

  switchProjectModalVisible = action => {
    if (action === 1) this.setState({ createProjectModalVisible: true });
    else this.setState({ createProjectModalVisible: false });
  };
  switchSideBar = () => {
    this.setState(prevState => ({ sideBarVisible: !prevState.sideBarVisible }));
  };

  handleCreate = (projectName, projectLang) => {
    this.setState({ createProjectModalVisible: false });
    let data = {};
    data.projectName = projectName;
    data.lang = projectLang;
    data.name = localStorage.getItem("name");
    data.id = localStorage.getItem("id");

    axios
      .post(machine + "/create-project", { data })
      .then(res => {
        if (res.data === "done") alert("project created");
        else alert("Error while creating project");
      })
      .catch(err => {
        if (err) throw err;
      });
  };

  updateCurrPath = present => {
    this.setState({ currPath: this.state.currPath + "/" + present });
  };

  render() {
    return (
      <div>
        <InputModal
          visible={this.state.createProjectModalVisible}
          inputPlaceHolder={"Enter the name of New Project"}
          ButtonName={"Create"}
          switchProjectModalVisible={this.switchProjectModalVisible}
          handleCreate={this.handleCreate}
        />
        <UserNavBar
          switchSideBar={this.switchSideBar}
          switchProjectModalVisible={this.switchProjectModalVisible}
          handleLogout={this.props.handleLogout}
          userName={this.props.userInfo.name}
        />
        <UserSideBar
          sideBarVisible={this.state.sideBarVisible}
          updateCurrPath={this.updateCurrPath}
          currPath={this.state.currPath}
        />
      </div>
    );
  }
}

export default User;
