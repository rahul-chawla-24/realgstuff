import React, { Component } from "react";
import { guestLogin } from "../../actions/authActions";
import axios from "axios";
import { connect } from "react-redux";
import "./my.css";
import { MDBBtn } from "mdbreact";
class Landing extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:3000/movie/all")
      .then((res) => console.log(res));
  }

  render() {
    return (
      <div id="Main">
        <div id="belowNavbar">
          <div className="para">
            <h2> Welcome to CHILLMODE Video App </h2>
            <h5 className="font-weight-light">
              Join CHILLMODE to watch the latest movies, TV shows and award-
              <br></br>winning Originals
            </h5>
            <br></br>
            <h4>Join and Enjoy The Journey</h4>
            <br></br>
            <MDBBtn
              color="primary pl-4 pr-4 pt-2 pb-2"
              onClick={() => {
                this.props.guestLogin();
              }}
            >
              Continue as Guest
            </MDBBtn>
          </div>
        </div>
        <div id="middle">
          <div className="para2">
            <h2> One membership, many benefits </h2>
            <h5 className="font-weight-light">
              Your Prime membership now also includes ad-free music along with
              unlimited free
            </h5>
            <br></br>
            <h4>Get In The Cave...</h4>
            <br></br>
          </div>

          <MDBBtn
            color="primary pl-4 pr-4 pt-2 pb-2 float-right"
            style={{ "margin-right": "15rem" }}
            onClick={() => {
              this.props.guestLogin();
            }}
          >
            Continue as Guest
          </MDBBtn>
        </div>
        <div id="info"></div>
        <div className="row">
        </div>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  };
};

export default connect(stateMapper, { guestLogin })(Landing);
