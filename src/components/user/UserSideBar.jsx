import React, { Component } from "react";
import { Header, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin"
  >
    <Menu.Item as="a">
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="code" />
      My Projects
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="settings" />
      Settings
    </Menu.Item>
  </Sidebar>
);

class UserSideBar extends Component {
  state = {
    animation: "slide along",
    direction: "left"
  };

  render() {
    const { animation, direction } = this.state;
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={this.props.sideBarVisible}
          />
          <Sidebar.Pusher>
            {this.props.children}
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Header as="h3">Application Content</Header>
              <Header as="h3">Application Content</Header>
              <Header as="h3">Application Content</Header>
              <Header as="h3">Application Content</Header>
              <Header as="h3">Application Content</Header>
              <Header as="h3">Application Content</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default UserSideBar;
