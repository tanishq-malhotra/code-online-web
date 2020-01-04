import React from "react";
import { Image, Modal, Button, Form } from "semantic-ui-react";

import maleAvatar from "../assets/images/signup-male-avatar.png";

const dimmer = "blurring";
const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

const RegisterModal = ({ isOpen, handleRegisterModal }) => (
  <Modal dimmer={dimmer} open={isOpen} onClose={() => handleRegisterModal(2)}>
    <Modal.Header style={{ marginLeft: "20px" }}>Register User</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="medium" src={maleAvatar} />
      <Modal.Description>
        <Form>
          <Form.Group widths="25">
            <Form.Input label="Name" placeholder="Name" />
            <Form.Input label="Email" placeholder="Email" />
          </Form.Group>
          <Form.Group widths="25">
            <Form.Input label="Password" placeholder="Password" />
            <Form.Select
              fluid
              label="Gender"
              options={options}
              placeholder="Gender"
            />
            <Form.Input label="Age" placeholder="Age" width={10}/>
          </Form.Group>
          
          <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
        </Form>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button color="black" onClick={() => handleRegisterModal(2)}>
        Close
      </Button>
      <Button
        positive
        icon="checkmark"
        labelPosition="right"
        content="Register"
        onClick={() => handleRegisterModal(2)}
      />
    </Modal.Actions>
  </Modal>
);

export default RegisterModal;
