import React from "react";
import { connect } from "react-redux";
import Home from "./components/home";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Allerta+Stencil"
        ></link>
        <Home />
      </div>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(App);
