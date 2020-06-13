import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import Facebook from "../Oauth/Facebook";
import Google from "../Oauth/Google";
import { login } from "../../actions/authActions";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import { connect } from "react-redux";
import "./my.css";
class LoginModal extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
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
    const { email, password } = this.state;
    this.props.login({ email, password });
  }
  // handleconsole(){
  //     console.log(this.props.isAuthenticated,this.props.user)
  // }

  render() {
    return (
      <div>
       <button className="font-weight-bold navbarItem myButton p-2" 
         onClick={() => this.handleModal()}>
          Login
        </button>
        <Modal show={this.state.show}>
          <Modal.Body>
            <Button onClick={() => this.closebutton()}>
              <MDBIcon icon="times" />
            </Button>
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                  <Facebook /> <br></br>
                  <h5 className="h5 text-center mb-4">OR</h5>
                  <form>
                    <p className="h5 text-center mb-4">Login with email</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        onChange={(event)=>{this.handleEmailchange(event)}}
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        onChange={(event)=>{this.handlePasswordchange(event)}}
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn
                        color="primary"
                        onClick={() => {
                          this.handleSubmit();
                        }}
                      >
                        Login
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
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  };
};

export default connect(mapstatetoprops, { login })(LoginModal);
