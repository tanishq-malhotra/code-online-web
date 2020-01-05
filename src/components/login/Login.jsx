import React, { Component } from "react";
import { Image, Modal, Button, Form } from "semantic-ui-react";

import maleAvatar from "../../assets/images/male-avatar.png";

const dimmer = "blurring";

class LoginModal extends Component {
  state = { email: "", pass: "" };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleSubmit = () => {
    let data = {};
    data.email = this.state.email;
    data.pass = this.state.pass;
    this.props.handleUserLogin(data);
  };
  render() {
    const { email, pass } = this.state;

    return (
      <Modal
        dimmer={dimmer}
        open={this.props.isOpen}
        onClose={() => this.props.handleLoginModal(2)}
      >
        <Modal.Header style={{ marginLeft: "20px" }}>User Login</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={maleAvatar} />
          <Modal.Description>
            <Form>
              <Form.Group>
                <Form.Input
                  label="Email"
                  name="email"
                  value={email}
                  placeholder="email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Input
                  label="Password"
                  placeholder="Password"
                  name="pass"
                  value={pass}
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => this.props.handleLoginModal(2)}>
            Close
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Login"
            onClick={() => this.handleSubmit()}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default LoginModal;
