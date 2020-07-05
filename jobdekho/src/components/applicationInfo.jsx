import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Applications extends Component {
  async componentDidMount() {
    let id = this.props.match.params.id;
    if (id === "null") {
      this.props.dispatch({
        type: "CLEAR_APPLICATION_INFO",
      });
    }
    let application = await axios.get(
      `http://localhost:3000/applications/${id}`
    );
    console.log(application);
    this.props.dispatch({
      type: "APPLICATION_DETAILS_FETCHED",
      payload: application.data,
    });
  }

  render() {
    return (
      <div className="container d-flex flex-column border mb-2">
        {!this.props.applicationInfo && (
          <h4 className="text-left display-4 mt-5 mb-5">
            Still waiting for the applicant's reply :(
          </h4>
        )}
        {this.props.applicationInfo && (
          <p className="text-left font-weight-normal mt-2">
            {this.props.applicationInfo.name + " ( Application )"}
          </p>
        )}
        {this.props.applicationInfo && (
          <p className="text-left font-weight-light">
            {this.props.applicationInfo.description}
          </p>
        )}{" "}
        {this.props.applicationInfo && (
          <p className="text-left font-weight-bold">Watch applicant's video</p>
        )}
        {this.props.applicationInfo && (
          <iframe
            className=""
            width="40%"
            height="250"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="application"
          ></iframe>
        )}
        <div>
          {this.props.applicationInfo && (
            <p className="font-weight-normal text-left mt-2">Applicant's Replied</p>
          )}
          {this.props.applicationInfo &&
            this.props.applicationInfo.answers &&
            this.props.applicationInfo.answers.length > 0 &&
            this.props.applicationInfo.answers.map((answer, index) => {
              return (
                <div>
                  <p className="font-weight-normal text-left">
                    {answer.question}
                  </p>
                  <p className="font-weight-light text-left mb-3">{answer.answer}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};
export default connect(stateMapper)(Applications);
