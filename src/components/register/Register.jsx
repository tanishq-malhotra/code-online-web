import React, { Component } from "react";
import { Image, Modal, Button, Form } from "semantic-ui-react";

import maleAvatar from "../../assets/images/signup-male-avatar.png";
import { emailValidator, nameValidator, passValidator, aboutValidator } from "./registerUtil";

const dimmer = "blurring";
const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

class RegisterModal extends Component {
  state = {
    name: "",
    email: "",
    pass: "",
    gender: "",
    age: "",
    about: "",
    isNameCorrect: true,
    isEmailCorrect: true,
    isPassCorrect: true,
    isAboutCorrect: true
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    if (!emailValidator(this.state.email))
      this.setState({ isEmailCorrect: false });
    else if (!this.state.isEmailCorrect)
      this.setState({ isEmailCorrect: true });

    if (!nameValidator(this.state.name))
      this.setState({ isNameCorrect: false });
    else if (!this.state.isNameCorrect) this.setState({ isNameCorrect: true });

    if (!passValidator(this.state.pass))
      this.setState({ isPassCorrect: false });
    else if (!this.state.isPassCorrect) this.setState({ isPassCorrect: true });

    if(!aboutValidator(this.state.about))
      this.setState({ isAboutCorrect: false });
    else if(!this.state.isAboutCorrect)
      this.setState({isAboutCorrect: true});
  };

  render() {
    const { name, email, pass, about, age } = this.state;
    return (
      <Modal
        dimmer={dimmer}
        open={this.props.isOpen}
        onClose={() => this.props.handleRegisterModal(2)}
      >
        <Modal.Header style={{ marginLeft: "20px" }}>
          Register User
        </Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src={maleAvatar} />
          <Modal.Description>
            <Form>
              <Form.Group></Form.Group>
              <Form.Group></Form.Group>
              <Form.Group>
                {this.state.isNameCorrect ? (
                  <Form.Input
                    label="Name"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                ) : (
                  <Form.Input
                    label="Name"
                    placeholder="Name"
                    name="name"
                    width="10"
                    onChange={this.handleChange}
                    error={{
                      content: "Please enter name",
                      pointing: "below"
                    }}
                    value={name}
                  />
                )}
              </Form.Group>
              <Form.Group>
                {this.state.isEmailCorrect ? (
                  <Form.Input
                    label="Email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                ) : (
                  <Form.Input
                    label="Email"
                    placeholder="Email"
                    name="email"
                    width="10"
                    value={email}
                    onChange={this.handleChange}
                    error={{
                      content: "Please enter a valid email address",
                      pointing: "below"
                    }}
                  />
                )}
              </Form.Group>
              <Form.Group>
                {this.state.isPassCorrect ? (
                  <Form.Input
                    label="Password"
                    placeholder="Password"
                    name="pass"
                    value={pass}
                    onChange={this.handleChange}
                  />
                ) : (
                  <Form.Input
                    label="Password"
                    placeholder="Password"
                    name="pass"
                    width="7"
                    value={pass}
                    onChange={this.handleChange}
                    error={{
                      content:
                        "Password must have one lower and upper case, a digit and a special charrator",
                      pointing: "below"
                    }}
                  />
                )}
              </Form.Group>
              <Form.Group>
                <Form.Select
                  fluid
                  label="Gender"
                  options={options}
                  placeholder="Gender"
                  name="gender"
                  onChange={this.handleChange}
                />

                <Form.Input
                  label="Age"
                  placeholder="Age"
                  width="6"
                  type="number"
                  name="age"
                  value={age}
                  onChange={this.handleChange}
                />
              </Form.Group>

              {this.state.isAboutCorrect ? (
                <Form.TextArea
                  label="About"
                  placeholder="Tell us more about you..."
                  name="about"
                  value={about}
                  onChange={this.handleChange}
                />
              ) : (
                <Form.TextArea
                  label="About"
                  placeholder="Tell us more about you..."
                  name="about"
                  width="7"
                  value={about}
                  onChange={this.handleChange}
                  error={{
                    content: "Please enter your programming interests",
                    pointing: "below"
                  }}
                />
              )}

              <Form.Checkbox label="I agree to the Terms and Conditions" />
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="black"
            onClick={() => this.props.handleRegisterModal(2)}
          >
            Close
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Register"
            onClick={() => this.handleSubmit()}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default RegisterModal;
