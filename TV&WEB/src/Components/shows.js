import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import Show from "./show";

class Shows extends Component {
  state={
    fetchPage : 1
  }
  async fetchShows() {
    console.log("hey");
    let url = "https://api.themoviedb.org/3/tv/popular";
    let data = await axios.get(url, {
      params: {
        api_key: "2fff4e23f227b30ca2b35379d8168fb1",
        language: "en-US",
        page: this.state.fetchPage
      }
    });
    console.log(data);
    this.props.dispatch({
      type: "FETCHED_SHOWS",
      payload: data.data.results
    });
  }
  componentDidMount = () => {
    this.fetchShows();
  };

  loadMore = () => {
    let page = this.state.fetchPage + 1;
    this.setState(
      {
        fetchPage: page
      },
      () => {
        this.fetchShows();
      }
    );
  };

  render() {
    //   let match = useRouteMatch();
    return (
      <div className="shows">
        <Switch>
          <Route path="/shows/:id" component={Show}></Route>
          <Route path="/shows">
            <div className="d-flex flex-wrap justify-content-center mt-5">
              {this.props.shows &&
                this.props.shows.map((val, index) => {
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
              <div className="container d-flex justify-content-center">
                <button
                  className="btn btn-outline-danger mt-2 mb-5 "
                  onClick={() => {
                    this.loadMore();
                  }}
                >
                  Load More
                </button>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Shows);
