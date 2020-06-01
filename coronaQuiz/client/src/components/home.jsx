import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Landing from "./landing";
import Navbar from "./navbar";
import Quiz from "./quiz";
import Result from "./result";


class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};

export default connect(stateMapper)(Home);
