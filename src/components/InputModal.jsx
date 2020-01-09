import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Modal,
  Input,
  Dropdown,
  Form
} from "semantic-ui-react";

const languageOptions = [
  { key: "c", text: "c", value: "c" },
  { key: "c++", text: "c++", value: "c++" },
  { key: "python", text: "python", value: "python" }
];
class InputModal extends Component {
  state = { input: "", dropdown:'Select Language' };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  render() {
    return (
      <div>
        <Modal basic size="small" dimmer="blurring" open={this.props.visible}>
          <Header icon="code" content="New Project" />
          <Modal.Content>
            <Form>
              <Input
                placeholder={this.props.inputPlaceHolder}
                fluid
                onChange={this.handleChange}
                name="input"
              />
              <Form.Group></Form.Group>
              <Form.Group></Form.Group>
              <Dropdown
                button
                className="icon"
                floating
                labeled
                icon="world"
                options={languageOptions}
                search
                text={this.state.dropdown}
                value = 'c'
                name='dropdown'
                onChange={this.handleChange}
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              basic
              color="red"
              inverted
              onClick={() => this.props.switchProjectModalVisible(2)}
            >
              <Icon name="remove" /> Close
            </Button>
            <Button
              color="green"
              inverted
              onClick={() => this.props.handleCreate(this.state.input, this.state.dropdown)}
            >
              <Icon name="checkmark" /> {this.props.ButtonName}
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default InputModal;
