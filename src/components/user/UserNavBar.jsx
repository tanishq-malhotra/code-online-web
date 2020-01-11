import React, { Component } from "react";
import { Input, Menu, Icon, Button, Dropdown } from "semantic-ui-react";

class UserNavBar extends Component {
  state = {};

  trigger = (
    <span>
      <Icon name="user" /> Hello, {localStorage.getItem("name").split(" ")[0]}
    </span>
  );

  options = [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{localStorage.getItem("name")}</strong>
        </span>
      ),
      disabled: true
    },
    { key: "profile", text: "Your Profile", icon: "user", value: "profile" },
    { key: "settings", text: "Settings", icon: "settings", value: "settings" },
    { key: "sign-out", text: "Sign Out", icon: "sign out", value: "signout" }
  ];

  render() {
    return (
      <div
        style={{ width: "100%", height: "auto", backgroundColor: "#1B1C1D" }}
      >
        <Menu inverted>
          <Menu.Menu>
            <Menu.Item onClick={() => this.props.switchSideBar()}>
              <Icon name="bars" />
            </Menu.Item>
          </Menu.Menu>

          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search Projects" />
            </Menu.Item>
            <Menu.Item>
              <Button
                icon
                labelPosition="right"
                positive
                onClick={() => this.props.switchProjectModalVisible(1)}
              >
                <Icon name="add circle" />
                <Button.Content visible>Create Project</Button.Content>
              </Button>
            </Menu.Item>

            <Menu.Item>
              <Dropdown
                trigger={this.trigger}
                options={this.options}
                pointing="top left"
                icon={null}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default UserNavBar;
