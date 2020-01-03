import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class NavBar extends Component {
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
              <Menu.Item
                name="Login"
                onClick={() => this.props.handleLoginModal(1)}
              />
              <Menu.Item name="Sign Up" />
            </Menu.Menu>
          </Menu>
        </Segment>
        
      </div>
    );
  }
}
