import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Applications extends Component {
  async componentDidMount() {
    let applications = await axios.get("http://localhost:3000/applications");
    console.log(applications);
    this.props.dispatch({
      type: "APPLICATIONS_FETCHED",
      payload: applications.data,
    });
  }
  render() {
    return (
      <div className="container">
        {this.props.applications && (
          <p className="text-left font-weight-normal">Applications</p>
        )}
        {this.props.applications &&
          this.props.applications.length > 0 &&
          this.props.applications.map((application, index) => {
            let applicationId = `/application/${application.id}`;
            return (
              <div>
                <div className="applications border mt-2">
                  <div className="applications-header m-2 d-flex p-1">
                    <small className="font-weight-normal text-left ml-3">
                      {application.role}
                    </small>
                    <div className="ml-3 align-item-right">
                      <Link to={applicationId}>
                        <small className="font-weight-light mr-3 ">
                          See application
                        </small>
                      </Link>
                    </div>
                  </div>
                  <p className="font-weight-normal mt-1 text-left ml-3">
                    {application.name}
                  </p>
                  <p className="font-weight-light text-left ml-3">
                    {application.description}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};
export default connect(stateMapper)(Applications);
