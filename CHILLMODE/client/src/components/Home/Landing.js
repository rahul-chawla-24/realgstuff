import React, { Component } from "react";
import Navbar from "../Layout/Navbar";
import SignupModal from "../Home/SingupModal";
import LoginModal from "../Home/LoginModal";
import axios from "axios";
import "./my.css";
import {MDBBtn} from 'mdbreact'
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
            <MDBBtn color="primary pl-4 pr-4 pt-2 pb-2" >Purchase membership</MDBBtn>
          </div>
        </div>
        <div id="middle">
          <div className="para2">
            <h2> One membership, many benefits </h2>
            <h5 className="font-weight-light" >
              Your Prime membership now also includes ad-free music along with
              unlimited free
            </h5>
            <br></br>
            <h4>Get In The Cave...</h4>
            <br></br>
          </div>

          <MDBBtn color="primary pl-4 pr-4 pt-2 pb-2 float-right" style={{"margin-right" : "15rem"}}>Purchase membership</MDBBtn>
        </div>
        <div id="info"></div>
        <div className="row">
          <div className="col-md-12">
            <div className="footer p-3 mt-4 text-center bg-dark white-text font-weight-bold">
              Developed By:
              <br></br>
              <span className="white-text font-weight-bold">
                <a>Rahul Chawla</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
