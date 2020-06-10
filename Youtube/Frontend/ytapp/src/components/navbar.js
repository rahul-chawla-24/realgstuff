import React, { Component } from "react";
import {Navbar,Form,FormControl,Button} from 'react-bootstrap'

class YTNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="#home" className="ml-5 text-danger">
          Youtube Clone
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-1"
              style={{ width: "30rem" }}
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default YTNavbar;