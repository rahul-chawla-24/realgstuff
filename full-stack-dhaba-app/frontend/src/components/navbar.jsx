import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class NTNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg"
        className=""
      >
        <Navbar.Brand href="/" className="text-white table">
          SHAHI DHABHA
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NTNavbar;
