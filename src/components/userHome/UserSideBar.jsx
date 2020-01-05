import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";

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
      <Icon name="gamepad" />
      Games
    </Menu.Item>
    <Menu.Item as="a">
      <Icon name="camera" />
      Channels
    </Menu.Item>
  </Sidebar>
);

class UserSideBar extends Component {
  state = {
    animation: "side along",
    direction: "left",
    visible: false
  };

  handleAnimationChange = animation => () =>
    this.setState(prevState => ({ animation, visible: !prevState.visible }));

  render() {
    const { animation, direction, visible } = this.state;

    return (
      <div>
        <Header as="h5">Vertical-Only Animations</Header>
        <Button onClick={this.handleAnimationChange("slide along")}>
          Slide Along
        </Button>
        <Sidebar.Pushable as={Segment}>
          <VerticalSidebar
            animation={animation}
            direction={direction}
            visible={visible}
          />
          <Sidebar.Pusher>
            <Segment>
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