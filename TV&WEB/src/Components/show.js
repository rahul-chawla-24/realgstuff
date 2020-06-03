import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Container, Row, Image, Col } from "react-bootstrap";

class Show extends React.Component {
  //
  async fetchShowData() {
    let id = this.props.match.params.id;
    console.log(id);
    let url = `https://api.themoviedb.org/3/tv/${id}`;
    let data = await axios.get(url, {
      params: {
        api_key: "2fff4e23f227b30ca2b35379d8168fb1",
      },
    });
    console.log("Show Detail", data);

    this.props.dispatch({
      type: "SHOW_DETAIL",
      payload: data.data,
    });
  }
  componentDidMount = () => {
    this.fetchShowData();
  };

  render() {
    return (
      <div className="shows">
        <Container fluid style={{ height: "100vh" }}>
          <Row>
            <Col xs="10" lg="5 " className=" d-flex justify-content-end mt-5">
              {this.props.showDetail && (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${this.props.showDetail.poster_path}`}
                  width="350rem"
                  className="mt-5"
                />
              )}
            </Col>
            <Col xs="10" lg="6">
              {this.props.showDetail && (
                <div className="mt-5 p-4" style={{ width: "40rem" }}>
                  <div class="w3-container w3-black w3-center w3-allerta p-1">
                    <p class="w3-xlarge title mt-3">
                      {this.props.showDetail.name}
                    </p>
                    <div className="genres p-1">
                      <span className="font-weight-normal">Genre : </span>
                      {this.props.showDetail.genres &&
                        this.props.showDetail.genres.map((val) => {
                          return (
                            <span className="text-muted">{val.name} </span>
                          );
                        })}
                    </div>
                    {/* <div className="adult p-1">
                      <span className="font-weight-normal">Age :</span>
                      {this.props.showDetail.adult && (
                        <span className="text-muted">18+</span>
                      )}
                      {this.props.showDetail.adult === false && (
                        <span className="text-muted">12+</span>
                      )}
                    </div> */}
                    <div className="rating p-1">
                      <span className="font-weight-normal">Rating : </span>
                      <span className="text-muted">
                        {this.props.showDetail.vote_average}
                      </span>
                    </div>
                    <div className="release_date p-1">
                      <span className="font-weight-normal">
                        Total Seasons :{" "}
                      </span>
                      <span className="text-muted">
                        {this.props.showDetail.number_of_seasons}
                      </span>
                    </div>
                    <br />
                    <hr />
                    <div className="overview p-1 mt-2">
                      <p>{this.props.showDetail.overview}</p>
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

export default connect(stateMapper)(Show);
