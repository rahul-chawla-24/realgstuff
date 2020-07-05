import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  MDBCard,
  MDBListGroup,
  MDBListGroupItem,
  MDBContainer,
} from "mdbreact";
class Questions extends Component {
  async componentDidMount() {
    let questions = await axios.get("http://localhost:3000/questions");
    console.log(questions);
    this.props.dispatch({
      type: "QUESTIONS_FETCHED",
      payload: questions.data,
    });
  }
  render() {
    return (
      <div className="container">
        {this.props.questions && (
          <p className="text-left font-weight-normal">QUESTIONS</p>
        )}
        <MDBContainer>
          <MDBCard style={{ width: "", marginTop: "1rem" }}>
            <MDBListGroup>
              {this.props.questions &&
                this.props.questions.length > 0 &&
                this.props.questions.map((questions, index) => {
                  return (
                  <MDBListGroupItem>{index + 1 + " "}{questions.question}</MDBListGroupItem>
                  );
                })}
            </MDBListGroup>
          </MDBCard>
        </MDBContainer>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};
export default connect(stateMapper)(Questions);
