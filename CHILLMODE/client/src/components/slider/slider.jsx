import React from "react";
import { connect } from "react-redux";
import "./slider.css";
import Slider from "react-slick";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { MDBIcon } from "mdbreact";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

class APSlider extends React.Component {
  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 1500,
      slidesToShow: 6,
      slidesToScroll: 6,
      touchMove: true,
    };
    return (
      <div className="mt-3">
        <div className="slider ">
          <Slider {...settings}>
            {this.props.contents &&
              this.props.contents.map((content) => {
                return (
                  <div className="zoom slide-image">
                    <div className="">
                      <img
                        className="slide-image"
                        src={`https://image.tmdb.org/t/p/w500${content.posterPath}`}
                        alt="Alps"
                      />
                    </div>
                    <div className="slide-image-overlay ">
                      <Link
                        to={
                          content.releaseDate
                            ? `/movies/${content.id}`
                            : `/shows/${content.id}`
                        }
                      >
                        <div className="mt-4 p-1 d-flex justify-content-center">
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
                      <div className="mr-3 mt-2">
                        <button
                          className="myButton float-right"
                          title="This feature is coming soon"
                        >
                          <MDBIcon
                            icon="folder-plus"
                            size="2x"
                            className="white-text"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};

export default connect(stateMapper)(APSlider);
