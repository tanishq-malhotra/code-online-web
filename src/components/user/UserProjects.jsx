import React, { Component } from "react";
// eslint-disable-next-line
import { Table, Grid, Icon, Header, Dropdown } from "semantic-ui-react";
import axios from "axios";

// general ip
const machine =
  window.location.protocol + "//" + window.location.hostname + ":" + 5000;

class UserProjects extends Component {
  state = { userData: [] };

  trigger = (
    <span>
      <Icon name="options" />
    </span>
  );

  getTable = () => {
    return (
      <div>
        <Table celled basic>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Language</Table.HeaderCell>
              <Table.HeaderCell>Date Of Creation</Table.HeaderCell>
              <Table.HeaderCell>Last Editied</Table.HeaderCell>
              <Table.HeaderCell>Options</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.userData.map(data => {
              return (
                <Table.Row key={data._id}>
                  <Table.Cell
                    selectable
                    style={{ padding: "15px" }}
                    onClick={() => alert(data.name + "   " + data._id)}
                  >
                    {data.name}
                  </Table.Cell>
                  <Table.Cell>{data.language}</Table.Cell>
                  <Table.Cell>{data.dateOfCreation}</Table.Cell>
                  <Table.Cell>
                    {data.lastEdited + "   "}
                    {}
                  </Table.Cell>

                  <Table.Cell>
                    <Dropdown icon="options">
                      <Dropdown.Menu>
                        <Dropdown.Item
                          text="Open"
                          description="ctrl + o"
                          onClick={() => alert("open" + data._id)}
                        />
                        <Dropdown.Item
                          text="Rename"
                          description="ctrl + r"
                          icon='pencil'
                          onClick={() => alert("rename")}
                        />
                        <Dropdown.Item
                          icon="trash"
                          text="Delete"
                          description="del"
                          onClick={() => alert("del")}
                        />
                        <Dropdown.Divider />
                        <Dropdown.Item text="Download" icon="download" />
                      </Dropdown.Menu>
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  };

  componentDidMount = () => {
    axios
      .get(machine + "/get-user-projects", {
        params: { id: localStorage.getItem("id") }
      })
      .then(res => {
        if (res.data !== "nope" && res.data !== "err")
          this.setState({ userData: res.data });
      })
      .catch(err => {
        throw err;
      });
  };

  render() {
    return (
      <div style={{ marginTop: "50px", marginLeft: "70px" }}>
        <Grid columns={3}>
          <Grid.Row textAlign="left">
            <Grid.Column>
              <Header as="h2">
                <Icon name="code" />
                <Header.Content>My Projects</Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row></Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={12}>
              {this.state.userData.length ? (
                this.getTable()
              ) : (
                <Header as="h2" textAlign="center">
                  <Header.Content>No Projects</Header.Content>
                </Header>
              )}
            </Grid.Column>
            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default UserProjects;
