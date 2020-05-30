import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Link } from "react-router-dom";
import { getResult } from "../actions/actions";
import ListItem from "./listItem";
class Result extends Component {
  async componentDidMount() {
    await this.props.getResult();
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="quiz">
          <p>{this.props.score && this.props.score}</p>
          <p> / </p>
          <p>{this.props.total && this.props.total}</p>
          {this.props.questions &&
            this.props.questions.map((question, index) => {
              return (
                <div>
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
                  })}
                </div>
              );
            })}
        </div>
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
