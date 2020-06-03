import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import NTNavbar from "./navbar";
import Movies from "./movies";
import Shows from "./shows";
import{ Redirect ,Route} from 'react-router-dom'
import Search from './search';

class Home extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/">
          <Redirect exact from="/" to="/movies" />
          </Route>
          <NTNavbar />
          <Movies />
          <Shows />
          <Route path="/search" component={Search}/>
        </BrowserRouter>
      </div>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Home);
