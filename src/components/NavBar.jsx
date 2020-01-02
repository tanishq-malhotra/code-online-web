import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import LoginModal from "./Login";

export default class NavBar extends Component {
  state = { activeItem: "home", isLoginModalOpen: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLoginModal = action => {
    if (action === 1) this.setState({ isLoginModalOpen: true });
    else this.setState({ isLoginModalOpen: false });
  };

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <LoginModal
          isOpen={this.state.isLoginModalOpen}
          handleLoginModal={this.handleLoginModal}
        />
        <Segment inverted>
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
              <Menu.Item
                name="Login"
                onClick={() => this.handleLoginModal(1)}
              />
              <Menu.Item name="Sign Up" />
            </Menu.Menu>
          </Menu>
        </Segment>
      </div>
    );
  }
}
