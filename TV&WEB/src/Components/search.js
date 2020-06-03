import React, { Component } from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import Movie from "./movie";
import Show from "./show";
import axios from "axios";

class Search extends Component {
  async fetchMovies() {
    console.log("hey");
    let url = "https://api.themoviedb.org/3/movie/popular";
    let data = await axios.get(url, {
      params: {
        api_key: "2fff4e23f227b30ca2b35379d8168fb1",
        language: "en-US",
        page: 1,
      },
    });
    console.log(data);
    this.props.dispatch({
      type: "FETCHED_MOVIES",
      payload: data.data.results,
    });
  }

  async fetchShows() {
    console.log("hey");
    let url = "https://api.themoviedb.org/3/tv/popular";
    let data = await axios.get(url, {
      params: {
        api_key: "2fff4e23f227b30ca2b35379d8168fb1",
        language: "en-US",
        page: 1,
      },
    });
    console.log(data);
    this.props.dispatch({
      type: "FETCHED_SHOWS",
      payload: data.data.results,
    });
  }

  async search() {
    this.props.dispatch({
      type: "SEARCH",
    });
  }

  async componentDidMount() {
    const value = queryString.parse(this.props.location.search);
    // console.log("value", value.item);
    // this.props.setSearchItem(value.item);
    this.props.dispatch({
      type: "SEARCH_ITEM",
      payload: value.item,
    });
    await this.fetchMovies();
    await this.fetchShows();
    this.search();
  }

  render() {
    return (
      <div>
        <div className="movies">
          {this.props.searchMovies.length !== 0 && (
            <h4 className="text-white d-flex justify-content-center mt-5">
              Movies :
            </h4>
          )}
          {this.props.searchMovies.length === 0 && (
            <h4 className="text-white d-flex justify-content-center mt-5">
              No Movie found for this query :(
            </h4>
          )}
          <Switch>
            <Route path="/movies/:id" component={Movie}></Route>
            <div className="d-flex flex-wrap justify-content-center mt-2 mr-5 ml-5">
              {this.props.searchMovies &&
                this.props.searchMovies.map((val, index) => {
                  return (
                    <Link to={`/movies/${val.id}`}>
                      <div
                        className="w3-card-4 mr-2 mt-2"
                        style={{ width: "20rem", height: "45vh" }}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500${val.poster_path}`}
                          alt="Alps"
                          style={{ width: "20rem", height: "45vh" }}
                        />
                      </div>
                    </Link>
                  );
                })}
            </div>
          </Switch>
        </div>
        <div className="shows">
          {this.props.searchShows.length !== 0 && (
            <h4 className="text-white d-flex justify-content-center mt-5">
              Shows :
            </h4>
          )}
          {this.props.searchShows.length === 0 && (
            <h4 className="text-white d-flex justify-content-center mt-5 mb-2">
              No Show found for this query :(
            </h4>
          )}
          <br />
          <Switch>
            <Route path="/shows/:id" component={Show}></Route>
            <div className="d-flex flex-wrap justify-content-center mt-2">
              {this.props.searchShows &&
                this.props.searchShows.map((val, index) => {
                  return (
                    <Link to={`/shows/${val.id}`}>
                      <div
                        className="w3-card-4 mr-2 mt-2"
                        style={{ width: "20rem", height: "45vh" }}
                      >
                        <img
                          src={`https://image.tmdb.org/t/p/w500${val.poster_path}`}
                          alt="Alps"
                          style={{ width: "20rem", height: "45vh" }}
                        />
                      </div>
                    </Link>
                  );
                })}
            </div>
          </Switch>
        </div>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};

export default connect(stateMapper)(Search);
