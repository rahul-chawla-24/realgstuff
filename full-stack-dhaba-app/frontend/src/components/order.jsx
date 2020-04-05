import React from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import Cart from "./cart";
import Menu from "./menu";

class Order extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Menu />
          </Col>
          <Col>
            {!this.props.items[0] && <h3 className="text-white mt-5 ">Please Add items to cart</h3>}
            {this.props.items[0] && <Cart />}
          </Col>
        </Row>
      </Container>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Order);
