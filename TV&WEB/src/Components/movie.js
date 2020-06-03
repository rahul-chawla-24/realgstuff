import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Container, Row, Image, Col } from "react-bootstrap";

class Movie extends React.Component {
  //
  async fetchMovieData() {
    let id = this.props.match.params.id;
    console.log(id);
    let url = `https://api.themoviedb.org/3/movie/${id}`;
    let data = await axios.get(url, {
      params: {
        api_key: "2fff4e23f227b30ca2b35379d8168fb1",
      },
    });
    console.log("Movie Detail", data);

    this.props.dispatch({
      type: "MOVIE_DETAIL",
      payload: data.data,
    });
  }
  componentDidMount = () => {
    this.fetchMovieData();
  };

  render() {
    return (
      <div className="movie">
        <Container fluid>
          <Row>
            <Col xs="10" lg="5 " className=" d-flex justify-content-end mt-5">
              {this.props.movieDetail && (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${this.props.movieDetail.poster_path}`}
                  width="350rem"
                  className="mt-5"
                />
              )}
            </Col>
            <Col xs="10" lg="6">
              {this.props.movieDetail && (
                <div className="mt-5 p-4 " style={{ width: "40rem" }}>
                  <div class="w3-container w3-black w3-center w3-allerta p-1">
                    <p class="w3-xlarge title mt-3">
                      {this.props.movieDetail.title}
                    </p>
                    <div className="genres p-1">
                      <span className="font-weight-normal">Genre : </span>
                      {this.props.movieDetail.genres &&
                        this.props.movieDetail.genres.map((val) => {
                          return (
                            <span className="text-muted">{val.name} </span>
                          );
                        })}
                    </div>
                    <div className="adult p-1">
                      <span className="font-weight-normal">Age :</span>
                      {this.props.movieDetail.adult && (
                        <span className="text-muted">18+</span>
                      )}
                      {this.props.movieDetail.adult === false && (
                        <span className="text-muted">12+</span>
                      )}
                    </div>
                    <div className="rating p-1">
                      <span className="font-weight-normal">Rating : </span>
                      <span className="text-muted">
                        {this.props.movieDetail.vote_average}
                      </span>
                    </div>
                    <div className="release_date p-1">
                      <span className="font-weight-normal">
                        Release date :{" "}
                      </span>
                      <span className="text-muted">
                        {this.props.movieDetail.release_date}
                      </span>
                    </div>
                    <br />
                    <hr />
                    <div className="overview p-1 mt-2">
                      <p>{this.props.movieDetail.overview}</p>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};

export default connect(stateMapper)(Movie);
