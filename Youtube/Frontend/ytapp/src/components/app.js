import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./menu";
import Videos from './videos';
import YTNavbar from './navbar';

class App extends Component {
  render() {
    return (
      <div>
        <YTNavbar/>
      <Container fluid className="mt-2">
        <Row>
        <Col md ={2}>
        <Menu />
        </Col>  
        <Col md={10} style={{background : "#F5F5F5" , height : "100"}}>
        <Videos/>
        </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
