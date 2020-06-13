import React, {Component} from "react";
import { connect } from "react-redux";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import "./slider.css";
import Slider from "react-slick";
import styled from "@emotion/styled/macro";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { IconButton } from "@material-ui/core";
import axios from "axios";

export default class APCarousel extends Component {

  render() {
    const settings = {
      arrows: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchMove: true,
      autoplay : true,
      autoplaySpeed: 4500,
      cssEase: "linear",
      pauseOnHover: true
    };
    
    return (
      <div className="slider">
        <Slider {...settings}>
      {this.props.contents &&
            this.props.contents.map((content) => {
              return (
                <div className="carousel-container">
                  <img className=""
                    src={`https://image.tmdb.org/t/p/original/${content.backdropPath}`}
                    alt="Alps"
                    style={{ width: "100%", height : "25rem" ,objectFit : ""}}
                  />
                  <div className="carousel-overlay">
                  <h1 className="mt-5 ml-5">{content.name}</h1>
                     <IconButton
                        aria-lable="delete"
                        href={ content.releaseDate ?`/movies/${content.id}` : `/shows/${content.id}`}
                        className="ml-5"
                      >
                        <PlayCircleFilledIcon
                          fontSize="large"
                          style={{color : "white" }}
                        />
                        <span className="carousel-text ml-1">Watch Now</span>
                      </IconButton>
                  </div>
                </div>
              );  
            })}
        </Slider>
      </div>
    );
  }
}