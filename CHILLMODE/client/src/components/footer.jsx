import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter
      className="font-small pt-4 mt-4"
      style={{ "background-color": "#1C262D" }}
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Developed by Rahul Chawla</h5>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
                <p>+91-8791774699</p>
              </li>
              <li className="list-unstyled">
                <p>romychawla0@gmail.com</p>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/realgcoding/realgstuff">Github</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/rahul-chawla-1424a1189">Linkedin</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.chillmode.chillherokuapp.com"> CHILLMODE </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
