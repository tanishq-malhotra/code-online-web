import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { randomBytes } from "crypto";
import io from "socket.io-client";

import CodeArea from "./CodeArea";
import InputArea from "./InputArea";

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
    input: ""
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

  render() {
    return (
      <div>
        <CodeArea handleEditorDidMount={this.handleEditorDidMount} />
        <div>
          <MDBRow>
            <MDBCol md="8"></MDBCol>
            <MDBCol md="4">
              <InputArea handleInputChange={this.handleInputChange} />
              <MDBBtn color="indigo" onClick={this.handleCodeSubmit}>
                Compile
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </div>
      </div>
    );
  }
}

export default App;
