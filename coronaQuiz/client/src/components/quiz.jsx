import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Link } from "react-router-dom";
import { fetchQuizQuestions } from "../actions/actions";
import ListItem from "./listItem";
class Quiz extends Component {
  async componentDidMount() {
    await this.props.fetchQuizQuestions();
  }
  render() {
    return (
      <div className="container mt-5">
        <div className="quiz">
          {this.props.questions &&
            this.props.questions.map((question, index) => {
              return <ListItem question={question} quesIndex={index} />;
            })}
        </div>
        <div className="submitButton">
          <Link to="/result">
            <button>SUBMIT</button>
          </Link>
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
  };
};
export default connect(stateMapper, { fetchQuizQuestions })(Quiz);
