import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
class Candidate extends Component {
  async componentDidMount() {
    let candidates = await axios.get("http://localhost:3000/candidates");
    console.log(candidates);
    this.props.dispatch({
      type: "CANDIDATES_FETCHED",
      payload: candidates.data,
    });
  }
  render() {
    return (
      <div className="container">
        {this.props.candidates && (
          <p className="text-left font-weight-normal">Candidates</p>
        )}
        {this.props.candidates &&
          this.props.candidates.length > 0 &&
          this.props.candidates.map((candidate, index) => {
            let applicationId = `/application/${candidate.applicationId}`;
            return (
              <MDBContainer>
                <div className="candidates border mt-2">
                  <div className="candidates-header m-2 d-flex p-1">
                    <small className="font-weight-normal text-left ml-3">
                      {candidate.role}
                    </small>
                    <div className="ml-3 align-item-right">
                      <Link to={applicationId}>
                        <small className="font-weight-light mr-3 ">
                          See application
                        </small>
                      </Link>
                    </div>
                  </div>
                  <MDBRow>
                    <MDBCol size={2}>
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.Il63QEPT2IwwdBta6d9eSwHaHa&pid=Api&P=0&w=300&h=300"
                        className="candidates-image mt-2 z-depth-1"
                        alt=""
                      />
                    </MDBCol>
                    <MDBCol size={10}>
                      <p className="font-weight-normal mt-1 text-left ml-3">
                        {candidate.name}
                      </p>
                      <p className="font-weight-light text-left ml-3">
                        {candidate.description}
                      </p>
                    </MDBCol>
                  </MDBRow>
                </div>
              </MDBContainer>
            );
          })}
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};
export default connect(stateMapper)(Candidate);
