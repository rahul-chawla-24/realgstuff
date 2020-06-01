import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import Background from './question.jpg'
import { sendUserDetails } from "../actions/actions.js";
import '../App.css' 

class Landing extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    toQuiz: false,
  };
  handleFirstnameInput = (value) => {
    this.setState({
        firstName: value,
    });
  };

  handleLastnameInput = (value) => {
    this.setState({
        lastName: value,
    });
  };

  handleEmailInput = (value) => {
    this.setState({
      email: value,
    });
  };

  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.name)
    if (!this.state.firstName || !this.state.lastName || !this.state.email) {
        console.log(this.state)
      alert("please fill the form below");
      return
    }

    await this.props.sendUserDetails(this.state);
    if (this.props.name) {
      console.log(this.props.name);
      this.setState({
        toQuiz: true,
      });
    }
  }

  render() {
    if (this.state.toQuiz === true) {
      window.location.href = `/quiz`;
    }
    return (
      <div className="container-fluid d-flex justify-content-center full-height style1" 
      style={{
        backgroundImage : `url(${Background})`,
       }}>
        <div className="mt-5">
          <MDBContainer>
            <MDBRow>
              <MDBCol lg="12">
                <MDBCard>
                  <MDBCardBody>
                    <form
                      onSubmit={(event) => {
                        this.handleSubmit(event);
                      }}
                      style={{ width: "20rem" }}
                    >
                      <p className="h4 text-center py-4">Subscribe</p>
                      <label
                        htmlFor="defaultFormCardNameEx"
                        className="grey-text font-weight-light"
                      >
                        Your Firstname
                      </label>
                      <input
                        type="text"
                        id="defaultFormCardNameEx"
                        className="form-control"
                        onChange={(e) => {
                          this.handleFirstnameInput(e.target.value);
                        }}
                      />
                      <br />
                      <label
                        htmlFor="defaultFormCardNameEx"
                        className="grey-text font-weight-light"
                      >
                        Your Lastname
                      </label>
                      <input
                        type="text"
                        id="defaultFormCardNameEx"
                        className="form-control"
                        onChange={(e) => {
                          this.handleLastnameInput(e.target.value);
                        }}
                      />
                      <br />
                      <label
                        htmlFor="defaultFormCardEmailEx"
                        className="grey-text font-weight-light"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        id="defaultFormCardEmailEx"
                        className="form-control"
                        onChange={(e) => {
                          this.handleEmailInput(e.target.value);
                        }}
                      />

                      <div className="text-center py-4 mt-3">
                        <MDBBtn
                          className="btn btn-outline-indigo"
                          type="submit"
                        >
                          Send
                          <MDBIcon far icon="paper-plane" className="ml-2" />
                        </MDBBtn>
                      </div>
                      {/* {this.state.toQuiz && <Redirect to="/quiz" />} */}
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return {
    name: state.user.firstname,
    email: state.user.email,
  };
};
export default connect(stateMapper, { sendUserDetails })(Landing);
