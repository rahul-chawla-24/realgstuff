import React, { Component } from "react";
import { connect } from "react-redux";
import { resultAction } from "../actions/actions";

class ListItem extends Component {

  async handleChange(value, index) {
    this.props.resultAction(value,index)
  }

  render() {
    return (
      <div className="mt-3">
        <p htmlFor="defaultFormCardNameEx" className="font-weight-bolder">
          {`${this.props.quesIndex + 1} ) ${this.props.question.text}`}
        </p>
        <form>
          {this.props.question.answers.map((answer, index) => {
            return (
              <div>
                <label>
                  <input
                    type="radio"
                    name={`question${this.props.quesIndex}`}
                    value={answer.correct}
                    onChange={(e) =>
                      this.handleChange(e.target.value, this.props.quesIndex)
                    }
                  />
                  {answer.text}
                </label>
              </div>
            );
          })}
        </form>
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
export default connect(stateMapper, { resultAction })(ListItem);
