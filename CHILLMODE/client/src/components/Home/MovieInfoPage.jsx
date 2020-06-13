import React, { Component } from "react";
import { fetchMovieById } from "../../actions/moviesActions";
import { Container, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import ExplicitIcon from "@material-ui/icons/Explicit";
import SubtitlesRoundedIcon from "@material-ui/icons/SubtitlesRounded";
import { MDBIcon, MDBBtn } from "mdbreact";
import APSlider from "../slider/slider";
import "./my.css";
// import Footer from "../Layout/Footer"

class MovieInfoPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.fetchMovieById(id);
  }
  componentDidUpdate(nextProps) {
    if (nextProps.location !== this.props.location) {
      let id = this.props.match.params.id;
      this.props.fetchMovieById(id);
    }
  }
  render() {
    const { movie } = this.props;
    return (
      <Container fluid>
        <Container fluid style={{ marginLeft: "55px", marginRight: "55px" }}>
          <Row className="">
            <Col md="7">
              <h3 className="white-text mt-5">{movie.name}</h3>
              <div>
                <span className="text-muted font-weight-normal mr-2">
                  IMBD {movie.rating}
                </span>
                <span className="text-muted font-weight-normal mr-2">
                  {movie.releaseDate}
                </span>
                <span>
                  <ExplicitIcon fontSize="" className="mr-2 text-muted" />
                  <SubtitlesRoundedIcon fontSize="" className="text-muted" />
                </span>
                <p className="font-weight-normal white-text mt-2">
                  {movie.overview}
                </p>
                <div>
                  <span className="font-weight-bold text-muted mt-4 mr-4">
                    Director
                  </span>
                  {movie.directors &&
                    movie.directors.map((val, index) => {
                      console.log(val);
                      return (
                        <span
                          className="font-weight-bold mt-4"
                          style={{ color: "#3F729B" }}
                        >
                          {val.name},{" "}
                        </span>
                      );
                    })}
                  {movie.directors && movie.directors.length < 1 && (
                    <span
                      className="font-weight-bold"
                      style={{ color: "#3F729B" }}
                    >
                      List not available
                    </span>
                  )}
                  <br />
                  <span className="font-weight-bold text-muted mr-5">
                    Actor
                  </span>
                  {movie.actors &&
                    movie.actors.map((val, index) => {
                      console.log(val);
                      return (
                        <span
                          className="font-weight-bold"
                          style={{ color: "#3F729B" }}
                        >
                          {val.name},{" "}
                        </span>
                      );
                    })}
                  {movie.actors && movie.actors.length < 1 && (
                    <span
                      className="font-weight-bold"
                      style={{ color: "#3F729B" }}
                    >
                      List not available
                    </span>
                  )}
                  <br />
                  <span className="font-weight-bold text-muted mr-5">
                    Genre
                  </span>
                  {movie.genres &&
                    movie.genres.map((val, index) => {
                      console.log(val);
                      return (
                        <span
                          className="font-weight-bold"
                          style={{ color: "#3F729B" }}
                        >
                          {val.name},{" "}
                        </span>
                      );
                    })}
                  {movie.genres && movie.genres.length < 1 && (
                    <span
                      className="font-weight-bold"
                      style={{ color: "#3F729B" }}
                    >
                      List not available
                    </span>
                  )}
                  <br />
                  <span className="font-weight-bold text-muted mr-4">
                    Subtitles
                  </span>
                  <span
                    className="font-weight-bold"
                    style={{ color: "#3F729B" }}
                  >
                    {movie.language === "en" ? "English" : movie.language}
                  </span>
                  <br />
                  <span className="font-weight-bold text-muted mr-4">
                    Language
                  </span>
                  <span
                    className="font-weight-bold"
                    style={{ color: "#3F729B" }}
                  >
                    {movie.language === "en" ? "English" : movie.language}
                  </span>
                </div>
                <div className="form-inline">
                  <button className="myButton mt-3" title="coming soon">
                    <MDBIcon
                      icon="play-circle primary-text hoverable "
                      size="4x"
                    />
                  </button>
                  <h5 className="white-text font-weight-bolder ml-2 mt-3">
                    Play
                  </h5>
                  {/* <MDBBtn color="primary ml-4 p-3">Add to watchlist</MDBBtn> */}
                </div>
              </div>
            </Col>
            <Col md="4">
              <img
                className="infoImage mt-5 float-right"
                src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
                alt="Alps"
              />
            </Col>
          </Row>
        </Container>
        <div>
          {this.props.movies && (
            <p
              className="text-white font-weight-bolder text-left mt-4 mb-5"
              style={{ marginLeft: "55px" }}
            >
              {" "}
              customers also watch{" "}
            </p>
          )}
          {this.props.movies && <APSlider contents={this.props.movies} />}
        </div>
      </Container>
    );
  }
}
const stateMapper = (state) => {
  return {
    movie: state.movies.movie,
    movies: state.movies.movies,
  };
};

export default connect(stateMapper, { fetchMovieById })(MovieInfoPage);
