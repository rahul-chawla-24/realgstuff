import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { search, setSearchItem } from "../actions/searchActions";
import queryString from "query-string";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { IconButton } from "@material-ui/core";
import "./search.css";
import { MDBIcon } from "mdbreact";
class Search extends React.Component {
  async componentDidMount() {
    const value = queryString.parse(this.props.location.search);
    console.log("value", value.item);
    this.props.setSearchItem(value.item);
    this.props.search();
  }

  componentDidUpdate(nextProps) {
    if (nextProps.location !== this.props.location) {
      const value = queryString.parse(this.props.location.search);
      console.log("value", value.item);
      this.props.setSearchItem(value.item);
      this.props.search();
    }
  }

  render() {
    return (
      <Container fluid className="mt-5">
        {/* {this.props.searchResult && <APSlider contents={this.props.searchResult} />} */}
        <div>
          {this.props.searchItem && (
            <h5 className="text-muted font-weight-bolder mt-1 mb-1 d-flex justify-content-center">
              {" "}
              {`Search result for "` + this.props.searchItem + `".`}
            </h5>
          )}
          <hr
            style={{
              color: "gray",
              backgroundColor: "gray",
              height: 1,
            }}
          />
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          {this.props.searchResult &&
            this.props.searchResult.map((content) => {
              return (
                <div className="image-overlay mt-3 mr-3">
                  <img
                    className="search-image "
                    src={`https://image.tmdb.org/t/p/w500${content.posterPath}`}
                    alt="Alps"
                    // style={{ width: "14.5vw", height : "26vh" ,"border-radius": "5px" , opacity : "0.5" }}
                  />
                  <div className="search-overlay">
                    <Link
                      to={
                        content.releaseDate
                          ? `/movies/${content.id}`
                          : `/shows/${content.id}`
                      }
                    >
                      <div className="mt-3 p-1 d-flex justify-content-center">
                        <IconButton aria-lable="delete">
                          <PlayCircleFilledIcon
                            fontSize="large"
                            className="play-button"
                          />
                        </IconButton>
                      </div>
                    </Link>
                    <p
                      className="text-white font font-weight-bolder p-1 my-text-title"
                      style={{ fontSize: "1.2rem", "text-align": "middle" }}
                    >
                      {content.name}
                    </p>
                    <p
                      className="text-white font-weight-bold my-text ml-2 mb-2"
                      style={{ textAlign: "", fontSize: "0.8rem" }}
                    >
                      {content.overview}
                    </p>
                    <div className="mr-3">
                      <button
                        className="myButton float-right"
                        title="This feature is coming soon"
                      >
                        <MDBIcon
                          icon="folder-plus"
                          size="2x"
                          className="white-text "
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          {this.props.searchItem && (
            <h5 className="text-muted font-weight-bolder mt-3 mb-1 d-flex justify-content-center">
              {" "}
              {`You may also like`}
            </h5>
          )}
          <hr
            style={{
              color: "gray",
              backgroundColor: "gray",
              height: 2,
            }}
          />
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          {this.props.moviesAndShows &&
            this.props.moviesAndShows.map((content) => {
              return (
                <div className="image-overlay mt-3 mr-3">
                  <img
                    className="search-image "
                    src={`https://image.tmdb.org/t/p/w500${content.posterPath}`}
                    alt="Alps"
                  />
                  <div className="search-overlay">
                    <Link
                      to={
                        content.releaseDate
                          ? `/movies/${content.id}`
                          : `/shows/${content.id}`
                      }
                    >
                      <div className="mt-3 p-1 d-flex justify-content-center">
                        <IconButton aria-lable="delete">
                          <PlayCircleFilledIcon
                            fontSize="large"
                            className="play-button"
                          />
                        </IconButton>
                      </div>
                    </Link>
                    <p
                      className="text-white font font-weight-bolder p-1 my-text-title"
                      style={{ fontSize: "1.2rem", "text-align": "middle" }}
                    >
                      {content.name}
                    </p>
                    <p
                      className="text-white font-weight-bold my-text ml-2 mb-2"
                      style={{ textAlign: "", fontSize: "0.8rem" }}
                    >
                      {content.overview}
                    </p>
                    <div className="mr-3">
                      <button
                        className="myButton float-right"
                        title="This feature is coming soon"
                      >
                        <MDBIcon
                          icon="folder-plus"
                          size="2x"
                          className="white-text "
                        />
                      </button>
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
    searchResult: state.search.searchResult,
    searchItem: state.search.searchItem,
    moviesAndShows: state.search.moviesAndShows,
  };
};

export default connect(stateMapper, { search, setSearchItem })(Search);
