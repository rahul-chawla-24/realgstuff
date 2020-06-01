import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuizQuestions } from "../actions/actions";
import ListItem from "./listItem";
import { withRouter } from "react-router";
import { MDBBtn, MDBIcon } from "mdbreact";
import { compose } from "redux";

class Quiz extends Component {
  state = {
    toResultPage : false 
  }

  async componentDidMount() {
    await this.props.fetchQuizQuestions();
  }
  formCheck = () => {
    if(this.props.selectAllQues === true){
      this.setState({
        toResultPage : true
      })
    } else {
      alert("Select all Ques");
    }
  }

  render() {
    if (this.state.toResultPage === true) {
      this.props.history.push(`/result`);
    }
    return (
      <div className="container mt-5">
        <div className="quiz">
          <h1 className="display-4 mt-2 mb-5">
            Some Questions about corona Pandemic
          </h1>
          {this.props.loading && (
            <>
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </>
          )}
          {this.props.questions &&
            this.props.questions.map((question, index) => {
              return <ListItem question={question} quesIndex={index} />;
            })}
        </div>
        <div className="submitButton">
          {/* <Link to="/result"> */}
            <div className="text-center py-2 mt-3">
              <MDBBtn className="btn btn-outline-indigo" type="click" 
               onClick = {e => {this.formCheck()}}
               >
                Submit
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          {/* </Link> */}
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
    loading: state.quiz.loading,
    selectAllQues: state.quiz.selectAllQues,
  };
};
export default compose(
  withRouter,
  connect(stateMapper, { fetchQuizQuestions }))
  (Quiz);
