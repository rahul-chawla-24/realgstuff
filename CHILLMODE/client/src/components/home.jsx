import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import MDBNavbar from "./navbar";
import HomePage from "./homepage";
import Movies from "./movies";
import Shows from "./shows";
import Landing from "./Home/Landing";
import Search from "./search";
import { Redirect, Route } from "react-router-dom";
import MovieInfoPage from "../components/Home/MovieInfoPage";
import SeriesInfo from "./Home/SeriesInfo";
import PrivateRoute from "./privateRoute";

class Home extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <div>
        <Switch>
          <Route exact path="/">
            {isAuthenticated ? <Redirect to="/home" /> : <Landing />}
          </Route>
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/home"
            component={HomePage}
          />
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/movies"
            component={Movies}
          />
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/shows"
            component={Shows}
          />
          <Route
            isAuthenticated={isAuthenticated}
            exact
            path="/movies/:id"
            component={MovieInfoPage}
          />
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/shows/:id"
            component={SeriesInfo}
          />
          <PrivateRoute
            isAuthenticated={isAuthenticated}
            exact
            path="/search"
            component={Search}
          />
          <Route exact path="*" >
            <Redirect to="/"/>
          </Route>
        </Switch>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(stateMapper)(Home);
