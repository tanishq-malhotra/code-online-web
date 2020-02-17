import React, { Component } from "react";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import UserProjects from "./UserProjects";
import UserSettings from "./UserSettings";

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

    <Menu.Item as={Link} to="/">
      <Icon name="code" color="green"/>
      My Projects
    </Menu.Item>

    <Menu.Item as={Link} to="/settings">
      <Icon name="setting" />
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
      <Router>
        <div style={{ height: "100vh" }}>
          <Sidebar.Pushable as={Segment}>
            <VerticalSidebar
              animation={animation}
              direction={direction}
              visible={this.props.sideBarVisible}
            />
            <Sidebar.Pusher>
              <div>
                <Switch>
                  <Route exact path="/" component={UserProjects} />
                  <Route exact path="/settings" component={UserSettings} />
                </Switch>
              </div>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Router>
    );
  }
}

export default UserSideBar;
