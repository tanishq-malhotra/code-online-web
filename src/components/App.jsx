import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { randomBytes } from "crypto";
import io from "socket.io-client";

import LoginModal from "./Login";
import NavBar from "./NavBar";
import CodeArea from "./CodeArea";
import InputArea from "./InputArea";
import RegisterModal from "./register/Register";

// general ip
const machine =
  window.location.protocol + "//" + window.location.hostname + ":" + 5000;

class App extends Component {
  valueGetter = React.createRef();
  state = {
    server: machine,
    output: "",
    exec_time: "",
    err: "",
    code: "",
    input: "",
    isLoginModalOpen: false,
    isRegisterModalOpen: false
  };

  compile = async () => {
    const { code, input } = this.state;
    const { server } = this.state;
    const socket = io.connect(server);
    let params = {
      id: randomBytes(10).toString("hex"),
      code: code,
      input: input,
      language: "C++"
    };

    socket.emit("compile", { code: code, params: params });

    socket.on(params.id, async data => {
      await this.setState({
        output: data.output,
        exec_time: data.exec_time,
        err: data.err
      });
      alert(this.state.output);
    });
  };

  // handlers
  handleCodeSubmit = async () => {
    await this.setState({ code: this.valueGetter.current() });
    this.compile();
  };

  handleInputChange = data => {
    this.setState({ input: data });
  };

  handleEditorDidMount = _valueGetter => {
    this.valueGetter.current = _valueGetter;
  };

  handleLoginModal = action => {
    if (action === 1) this.setState({ isLoginModalOpen: true });
    else this.setState({ isLoginModalOpen: false });
  };

  handleRegisterModal = action => {
    if (action === 1) this.setState({ isRegisterModalOpen: true });
    else this.setState({ isRegisterModalOpen: false });
  };

  render() {
    return (
      <div>
        <LoginModal
          isOpen={this.state.isLoginModalOpen}
          handleLoginModal={this.handleLoginModal}
        />

        <RegisterModal
          isOpen={this.state.isRegisterModalOpen}
          handleRegisterModal={this.handleRegisterModal}
        />
        <NavBar
          handleLoginModal={this.handleLoginModal}
          handleRegisterModal={this.handleRegisterModal}
        />

        <div>
          <MDBRow>
            <MDBCol md="8">
              <CodeArea handleEditorDidMount={this.handleEditorDidMount} />
            </MDBCol>
            <MDBCol md="4">
              <InputArea handleInputChange={this.handleInputChange} />
              <MDBBtn color="indigo" onClick={this.handleCodeSubmit}>
                Compile
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </div>
        {"Output: " +
          this.state.output +
          "  Execution Time: " +
          this.state.exec_time +
          "Err: " +
          this.state.err}
      </div>
    );
  }
}

export default App;
