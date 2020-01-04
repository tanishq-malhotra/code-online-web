import React from "react";
import {
  Header,
  Image,
  Modal,
  Button,
  Form,
} from "semantic-ui-react";

import maleAvatar from "../../assets/images/male-avatar.png";

const dimmer = "blurring";
const LoginModal = ({ isOpen, handleLoginModal }) => (
  <Modal dimmer={dimmer} open={isOpen} onClose={() => handleLoginModal(2)}>
    <Modal.Header style={{ marginLeft: "20px" }}>User Login</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={maleAvatar} />
      <Modal.Description>
        <Form>
          <Form.Field>
            <Header>Email</Header>
            <input placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <Header>Password</Header>
            <input placeholder="Password" />
          </Form.Field>
        </Form>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button color="black" onClick={() => handleLoginModal(2)}>
        Close
      </Button>
      <Button
        positive
        icon="checkmark"
        labelPosition="right"
        content="Login"
        onClick={() => handleLoginModal(2)}
      />
    </Modal.Actions>
  </Modal>
);

export default LoginModal;
