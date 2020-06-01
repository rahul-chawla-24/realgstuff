import React, { Component } from "react";
import { connect } from "react-redux";
import { getResult } from "../actions/actions";
import { MDBBtn, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";

class Result extends Component {
  state = {
    heading: "",
  };

  async componentDidMount() {
    await this.props.getResult();
  }
  render() {
    return (
      <div className="container mt-5">
        {!this.props.result.length ? (
          <div className="submitButton">
            <Link to="/quiz">
              <div className="text-center py-2 mt-3">
                <MDBBtn className="btn btn-outline-indigo" type="click">
                  Go Back to Quiz ?
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </Link>
          </div>
        ) : (
          <div className="quiz">
            {this.props.total && (
              <span className="display-4 mt-3 mb-5">
                {" "}
                Your Score is {this.props.score}/{this.props.total}
              </span>
            )}
            <h4 className="font-weight-bolder mt-3 mb-3">Correct answers ..</h4>
            {this.props.questions &&
              this.props.questions.map((question, index) => {
                return (
                  <div className="mt-2">
                    <p
                      htmlFor="defaultFormCardNameEx"
                      className="font-weight-bolder"
                    >
                      {`${index + 1} ) ${question.text}`}
                    </p>
                    {question.answers.map((answer) => {
                      if (answer.correct === true) {
                        return (
                          <div>
                            <p
                              htmlFor="defaultFormCardNameEx"
                              className="font-weight-bold"
                            >
                              {answer.text}
                            </p>
                            <p
                              htmlFor="defaultFormCardNameEx"
                              className="font-weight-normal"
                            >
                              {answer.description}
                            </p>
                          </div>
                        );
                      }
                      return <div></div>;
                    })}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

const stateMapper = (state) => {
  return {
    name: state.user.firstname,
    email: state.user.email,
    questions: state.quiz.questions,
    result: state.quiz.result,
    score: state.quiz.score,
    total: state.quiz.total,
  };
};
export default connect(stateMapper, { getResult })(Result);
