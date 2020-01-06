import React, { Component } from "react";
import { Button, Header, Icon, Modal, Input } from "semantic-ui-react";

class InputModal extends Component {
  state = { input: "" };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  render() {
    return (
      <div>
        <Modal
          basic
          size="small"
          dimmer="blurring"
          open={this.props.visible}
        >
          <Header icon="code" content="New Project" />
          <Modal.Content>
            <Input
              placeholder={this.props.inputPlaceHolder}
              fluid
              onChange={this.handleChange}
              name="input"
            />
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
            <Button color="green" inverted>
              <Icon name="checkmark" /> {this.props.ButtonName}
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default InputModal;
