import React, { Component } from "react";
// eslint-disable-next-line
import { Table, Grid, Icon, Header } from "semantic-ui-react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

// general ip
const machine =
  window.location.protocol + "//" + window.location.hostname + ":" + 5000;

class UserProjects extends Component {
  state = { userData: [], noProject: false };

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
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.userData.map(data => {
              return (
                <Table.Row key={data._id}>
                  <Table.Cell
                    selectable
                    style={{ color: "black" }}
                    onClick={() => localStorage.setItem('pname', data.name)}
                  >
                    <Link to="/project-tree">
                      <div style={{ marginTop: "10px", marginLeft: "15px" }}>
                        {data.name}
                      </div>
                    </Link>
                  </Table.Cell>

                  <Table.Cell>{data.language}</Table.Cell>
                  <Table.Cell>{data.dateOfCreation}</Table.Cell>
                  <Table.Cell>
                    {data.lastEdited + "   "}
                    {}
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
        else this.setState({noProject: true})
      })
      .catch(err => {
        throw err;
      });
  };

   FileLoader = () => {
    return (
      <div>
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Loading</Loader>
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      </div>
    );
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
              ) : this.state.noProject ? (
                <Header as="h2" textAlign="center">
                  <Header.Content>No Projects</Header.Content>
                </Header>
              ) : (
                this.FileLoader()
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
