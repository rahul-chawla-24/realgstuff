import React, { Component } from "react";
import { MDBNavbar , MDBNavbarBrand } from "mdbreact";

class NTNavbar extends Component {
  render() {
    return (
      <MDBNavbar color="blue-gradient p-3" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text font-weight-bold">SHAHI DHABA</strong>
        </MDBNavbarBrand>
      </MDBNavbar>
    );
  }
}

export default NTNavbar;
