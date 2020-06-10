import React, { Component } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

class Menu extends Component {
  render() {
    return (
      <div>
  
        <div style={{'width' : '15vw' ,"height" : "100vh"}} className="mt-2">
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home" className="text-muted">Home</Nav.Link>
            <Nav.Link eventKey="link-1" className="text-muted" >Trending</Nav.Link>
            <Nav.Link eventKey="link-2" className="text-muted" >Bookmarked</Nav.Link>
          </Nav>
        </div>
      </div>
    );
  }
}
export default Menu;
