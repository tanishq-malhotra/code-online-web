import React, { Component } from "react";
import { Input, Menu, Icon, Button } from "semantic-ui-react";

class UserNavBar extends Component {
  state = {};

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
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default UserNavBar;
