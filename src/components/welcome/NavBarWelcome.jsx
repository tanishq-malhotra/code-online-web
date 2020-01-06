import React, { Component } from "react";
import { Menu, Segment, Button, Icon } from "semantic-ui-react";

 class NavBarWelcome extends Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div
        style={{ width: "100%", height: "auto", backgroundColor: "#1B1C1D" }}
      >
        <Segment inverted style={{ boxRadius: "0" }}>
          <Menu inverted pointing secondary>
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="messages"
              active={activeItem === "messages"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="friends"
              active={activeItem === "friends"}
              onClick={this.handleItemClick}
            />

            <Menu.Menu position="right">
              <Button icon labelPosition="right" animated="fade" color='green'>
                <Icon name="plus"/>
                <Button.Content visible>Create Project</Button.Content>
                <Button.Content hidden> Temporary Project</Button.Content>
              </Button>
              {!this.props.isUserLogined ? (
                <Menu.Item
                  name="Login"
                  onClick={() => this.props.handleLoginModal(1)}
                />
              ) : (
                <div></div>
              )}
              {!this.props.isUserLogined ? (
                <Menu.Item
                  name="Sign Up"
                  onClick={() => this.props.handleRegisterModal(1)}
                />
              ) : (
                <Button>Logout</Button>
              )}
            </Menu.Menu>
          </Menu>
        </Segment>
      </div>
    );
  }
}

export default NavBarWelcome;