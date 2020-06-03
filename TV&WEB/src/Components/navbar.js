import React, { Component } from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import '../App.css'

class NTNavbar extends Component {
  state = {
    searchTerm: "",
    toSearchPage: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleKeyPress(event) {
    if (event.charCode === 13) {
      event.preventDefault();
      if (this.state.searchTerm === "") {
        return;
      }
      this.setState(
        {
          toSearchPage: true,
        },
        () => {
          console.log(this.state);
        }
      );
    }
  }

  render() {
    if (this.state.toSearchPage === true) {
      // return <Redirect to={`/search?item=${this.state.searchTerm}`} />
      // const { href } = window.location;
      // this.props.history.push(`/search?item=${this.state.searchTerm}`)
      window.location.href = `/search?item=${this.state.searchTerm}`;
    }
    return (
      <Navbar expand="lg" className="">
        <Navbar.Brand href="/" className="ml-5 text-danger">
          TV&WEB
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="mr-auto">
            {window.location.pathname === "/movies" ? (
              <Nav.Link pathname="/movies" className="text-white">
                Movies
              </Nav.Link>
            ) : (
              <Nav.Link href="/movies" className="text-muted">
                Movies
              </Nav.Link>
            )}
            {window.location.pathname === "/shows" ? (
              <Nav.Link href="/shows" className="text-white">
                TV shows
              </Nav.Link>
            ) : (
              <Nav.Link href="/shows" className="text-muted">
                TV shows
              </Nav.Link>
            )}
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-md-5"
              style={{ width: "30rem" }}
              onKeyPress={(e) => {
                this.handleKeyPress(e);
              }}
              onChange={(e) => {
                this.setState({ searchTerm: e.target.value });
              }}
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
const stateMapper = (state) => {
  return state;
};
export default compose(withRouter, connect(stateMapper))(NTNavbar);
