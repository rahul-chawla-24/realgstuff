import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { register } from "../../actions/authActions";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBIcon,
} from "mdbreact";
import { connect } from "react-redux";
import "./my.css";
class SignupModal extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
  }

  handleModal() {
    this.setState({
      show: true,
    });
  }
  closebutton() {
    this.setState({
      show: false,
    });
  }
  handleFirstNamechange(event) {
    this.setState(
      {
        firstName: event.target.value,
      },
      console.log(this.state)
    );
  }
  handleLastNamechange(event) {
    this.setState(
      {
        lastName: event.target.value,
      },
      console.log(this.state)
    );
  }
  handleEmailchange(event) {
    this.setState(
      {
        email: event.target.value,
      },
      console.log(this.state)
    );
  }
  handlePasswordchange(event) {
    this.setState(
      {
        password: event.target.value,
      },
      console.log(this.state)
    );
  }
  handleSubmit() {
    console.log(this.state);
    console.log(register);

    const { firstName, lastName, email, password } = this.state;
    this.props.register({ firstName, lastName, email, password });
  }
  render() {
    return (
      <div>
        <button className="font-weight-bold navbarItem myButton p-2 mr-1" 
         onClick={() => this.handleModal()}>
          Sign Up
        </button>
        <Modal show={this.state.show}>
          <Modal.Body>
          <Button onClick={() => this.closebutton()}>
              <MDBIcon icon="times" />
            </Button>
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <form>
                    <p className="h5 text-center mb-4">Sign up</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Your firstname"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(event) => {
                          this.handleFirstNamechange(event);
                        }}
                      />
                      <MDBInput
                        label="Your lastname"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(event) => {
                          this.handleLastNamechange(event);
                        }}
                      />
                      <MDBInput
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(event) => {
                          this.handleEmailchange(event);
                        }}
                      />
                      <MDBInput
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        onChange={(event) => {
                          this.handlePasswordchange(event);
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn
                        color="primary"
                        onClick={() => {
                          this.handleSubmit();
                        }}
                      >
                        Register
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapstatetoprops = (state) => {
  //   Newstate : state
  return state;
};

export default connect(mapstatetoprops, { register })(SignupModal);
