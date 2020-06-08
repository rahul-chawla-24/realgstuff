import React from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import Cart from "./cart";
import Menu from "./menu";
import User from "./user";
import { Link } from "react-router-dom";
import axios from "axios";
import {MDBBtn} from 'mdbreact';
import "../App.css";

class Order extends React.Component {
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="6" md="8">
            <Menu />
          </Col>
          <Col xs="6" md="4">
            {!this.props.userName && (
              <div>
                <User />
              </div>
            )}
            <br></br>

            <div className="d-flex justify-content-center">
              {!this.props.items[0] && (
                <h3 className="blue-text mt-5 ">:( No items in cart</h3>
              )}
              {this.props.items[0] && (
                <div className="z-depth-2">
                  <h3 className=" heavy-rain-gradient p-2 font-weight-normal blue-text">
                    My Cart{" "}
                  </h3>
                  <div className="shadow-top"></div>
                  <div
                    style={{
                      width: "25rem",
                      height: "22rem",
                      overflow: "scroll",
                    }}
                    className="mycart"
                  >
                    <Cart />
                  </div>

                  <div className="shadow-bottom"></div>
                  <div className="heavy-rain-gradient p-1 ">
                    {this.props.total && (
                      <h5 className="blue-text mt-3 font-weight-bolder">
                        Total price : ₹ {this.props.total}
                      </h5>
                    )}
                    {!this.props.userName && (
                      <span className="text-danger font-weight-normal">
                        Please enter user details above to generate bill
                      </span>
                    )}
                    {this.props.userName && (
                      <div className="container mt-2 mb-5">
                        <Link to="/bill">
                        <MDBBtn color="success" className="p-2">CHECKOUT</MDBBtn>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const stateMapper = (state) => {
  return state;
};

export default connect(stateMapper)(Order);
