import React, { Component } from "react";
import axios from "axios";
import { Table, Grid, Icon, Header } from "semantic-ui-react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
// general ip
const machine =
  window.location.protocol + "//" + window.location.hostname + ":" + 5000;

class UserProjectList extends Component {
  state = { userData: [] };

  getTable = () => {
    return (
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              {localStorage.getItem("pname")}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.userData.map(data => {
            return (
              <Table.Row
                key={data.inode}
                onClick={() => {
                  this.props.updateCurrPath(data.name);
                  this.fetchProjectList();
                  this.setState({ userData: [] });
                }}
              >
                <Table.Cell
                  collapsing
                  style={{ padding: "15px", margin: "20px" }}
                >
                  {data.type === "directory" ? (
                    <Icon name="folder" />
                  ) : (
                    <Icon name="file outline" />
                  )}
                  {data.name}
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell
                  collapsing
                  textAlign="right"
                  style={{ padding: "15px" }}
                >
                  {data.time}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  };

  FileLoader = () => {
    return (
      <div>
        <Segment>
          <Dimmer active inverted>
            <Loader indeterminate size="large">
              Preparing Files
            </Loader>
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      </div>
    );
  };

  fetchProjectList = async () => {
    const data = {
      userId: localStorage.getItem("id"),
      userName: localStorage.getItem("name"),
      projectName: localStorage.getItem("pname"),
      level: "1",
      currPath: this.props.currPath
    };
    await axios
      .post(machine + "/get-project-tree", {
        params: { data }
      })
      .then(res => {
        if (res.data !== "nope" && res.data !== "err")
          this.setState({ userData: res.data });
      })
      .catch(err => {
        throw err;
      });
  }

  componentWillMount() {
    this.fetchProjectList();
  }

  render() {
    return (
      <div style={{ marginTop: "50px", marginLeft: "70px" }}>
        <Grid columns={3}>
          <Grid.Row textAlign="left">
            <Grid.Column>
              <Header as="h2">
                <Icon name="code" />
                <Header.Content>Project Tree</Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={11}>
              {this.state.userData.length ? this.getTable() : this.FileLoader()}
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default UserProjectList;
