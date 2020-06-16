import React, { Component } from "react";
import { fetchShowById } from "../../actions/showsActions";
import { Container, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import ExplicitIcon from "@material-ui/icons/Explicit";
import SubtitlesRoundedIcon from "@material-ui/icons/SubtitlesRounded";
import { MDBIcon } from "mdbreact";
import APSlider from "../slider/slider";
import "./my.css";
import { Link } from "react-router-dom";
// import Footer from "../Layout/Footer"

class showInfoPage extends Component {
  constructor() {
    super();
    this.state = {
      currentSeason: 0,
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.fetchShowById(id);
  }
  componentDidUpdate(nextProps) {
    if (nextProps.location !== this.props.location) {
      let id = this.props.match.params.id;
      this.props.fetchShowById(id);
    }
  }
  handleSeasonSwitch = (season) => {
    this.setState({
      currentSeason: season,
    });
  };
  render() {
    const { show } = this.props;
    const { currentSeason } = this.state;
    return (
      <Container fluid>
        <Container fluid style={{ marginLeft: "55px", marginRight: "55px" }}>
          <Row className="">
            <Col md="7">
              <h3 className="white-text mt-5">{show.name}</h3>
              <div>
                {show.seasons && show.seasons.length && (
                  <select
                    className="btn btn-outline-primary waves-effect mr-2"
                    onChange={(e) => this.handleSeasonSwitch(e.target.value)}
                  >
                    {show.seasons &&
                      show.seasons.map((val, index) => {
                        return (
                          <option key={index} value={index}>
                            Season {val.seasonNumber}
                          </option>
                        );
                      })}
                  </select>
                )}
                {show.seasons && show.seasons.length && (
                  <span className="text-muted font-weight-normal mr-2">
                    IMBD {show.seasons[currentSeason].rating}
                  </span>
                )}
                {show.seasons && !show.seasons.length && (
                  <span className="text-muted font-weight-normal mr-2">
                    IMBD {show.rating}
                  </span>
                )}
                <span className="text-muted font-weight-normal mr-2">
                  {show.releaseDate}
                </span>
                <span>
                  <ExplicitIcon fontSize="" className="mr-2 text-muted" />
                  <SubtitlesRoundedIcon fontSize="" className="text-muted" />
                </span>
                {show.seasons && show.seasons.length && (
                  <p className="font-weight-normal white-text mt-2">
                    {show.seasons[currentSeason].overview}
                  </p>
                )}
                {show.seasons && !show.seasons.length && (
                  <p className="font-weight-normal white-text mt-2">
                    {show.overview}
                  </p>
                )}
                <div>
                  <span className="font-weight-bold text-muted mt-4 mr-4">
                    Director
                  </span>
                  {show.directors &&
                    show.directors.map((val, index) => {
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
                  {show.directors && show.directors.length < 1 && (
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
                  {show.actors &&
                    show.actors.map((val, index) => {
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
                  {show.actors && show.actors.length < 1 && (
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
                  {show.genres &&
                    show.genres.map((val, index) => {
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
                  {show.genres && show.genres.length < 1 && (
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
                    {show.language === "en" ? "English" : show.language}
                  </span>
                  <br />
                  <span className="font-weight-bold text-muted mr-4">
                    Language
                  </span>
                  <span
                    className="font-weight-bold"
                    style={{ color: "#3F729B" }}
                  >
                    {show.language === "en" ? "English" : show.language}
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
                {show.seasons && !show.seasons.length && (
                  <div className="mt-2">
                    <span className="font-weight-bold text-white">Season and episode list not avaiable for this show. Try checking </span>
                    <Link to="/shows/5" >
                      <span className="font-weight-bold" >Breaking Bad</span>
                    </Link>
                  </div>
                )}
              </div>
            </Col>
            <Col md="4">
              {show.seasons && show.seasons.length && (
                <img
                  className="infoImage mt-5 float-right"
                  src={`https://image.tmdb.org/t/p/w500${show.seasons[currentSeason].posterPath}`}
                  alt="Alps"
                />
              )}
              {show.seasons && !show.seasons.length && (
                <img
                  className="infoImage mt-5 float-right"
                  src={`https://image.tmdb.org/t/p/w500${show.posterPath}`}
                  alt="Alps"
                />
              )}
            </Col>
          </Row>
        </Container>
        {show.seasons && !show.seasons.length && (
          <div>
            {this.props.shows && (
              <p
                className="text-white font-weight-bolder text-left mt-4 mb-5"
                style={{ marginLeft: "55px" }}
              >
                {" "}
                customers also watch{" "}
              </p>
            )}
            {this.props.shows && <APSlider contents={this.props.shows} />}
          </div>
        )}
        <div style={{ marginLeft: "55px", marginRight: "55px" }}>
          {show.seasons &&
            show.seasons.length &&
            show.seasons[currentSeason].episodes &&
            show.seasons[currentSeason].episodes.map((val, index) => {
              return (
                <div className="episodes z-depth-1-half mt-2">
                  <div className="row">
                    <div className="col-3">
                      <img
                        className="episodes-image"
                        src={`https://image.tmdb.org/t/p/original${val.stillPath}`}
                      ></img>
                    </div>
                    <div className="col-5">
                      <button
                        className="myButton mt-5 mr-2"
                        title="coming soon"
                      >
                        <MDBIcon
                          icon="play-circle primary-text hoverable "
                          size="3x"
                        />
                      </button>
                      <span className="font-weight-normal white-text">
                        <b>
                          {index + 1} : {val.name}
                        </b>
                      </span>
                      <div className="episodes-overview mt-4 text-muted">
                        <b> {val.overview} </b>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="extraDetails float-left">
                        <p className="font-weight-normal text-white ml-3">
                          IMBD : {val.rating}
                        </p>
                        <p className="font-weight-normal text-white ml-3">
                          {val.releaseDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    );
  }
}
const stateMapper = (state) => {
  return {
    show: state.shows.show,
    shows: state.shows.shows,
  };
};

export default connect(stateMapper, { fetchShowById })(showInfoPage);
