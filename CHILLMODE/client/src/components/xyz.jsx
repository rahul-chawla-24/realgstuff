import React, { Component } from "react";
import { Card } from "react-bootstrap";
import styled from "@emotion/styled";

class NewCom extends Component {
  render() {
    const Hover = styled.div({
      opacity: 0,
      transition: "opacity 350ms ease",
      display : "block"
    });
    const Background = styled.div({
      [`:hover ${Hover}`]: {
        opacity: 1,
      },
    });
    return (
      <div>
        <Background>
          <Card style={{width : "16rem"}} bg="primary" >
            <Card.Body >
              <Hover>
                  <p className="text-danger">Hey</p>
                <Card.Title className="text-dark">New</Card.Title>
                <Card.Text className="text-danger">Hey HEY HEY HEY</Card.Text>
              </Hover>
            </Card.Body>
          </Card>
        </Background>
      </div>
    );
  }
}

export default NewCom ;