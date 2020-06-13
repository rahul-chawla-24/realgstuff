import React from "react";
import { connect } from "react-redux";
import {
  Container,
  Col,
  Row,
  Card,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import {
  Manager,
  Reference,
  Popper,

} from "react-popper";
import "./slider.css";
import Slider from "react-slick";
import styled from "@emotion/styled/macro";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import ExplicitIcon from "@material-ui/icons/Explicit";
import { IconButton } from "@material-ui/core";
import axios from "axios";

function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      <div className="bg-white" style={{ width: "100px", height: "100px" }}>
        <p className="text-dark">New</p>
      </div>
    </Tooltip>
  );
}

class APSliderTwo extends React.Component {
  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 1500,
      slidesToShow: 7,
      slidesToScroll: 7,
      touchMove: true,
    };
    return (
      <div className="mt-3">
        <div className="slider">
          <Slider {...settings}>
            {this.props.contents &&
              this.props.contents.map((content,index ) => {
                var color = "#BC3112";
                if(index === 1)
                color = "#3D85C0"
                else if (index === 2)
                color = "#91740E"
                else if (index === 3)
                color = "#FE5F1D"
                else if (index === 4)
                color = "#FAB191"
                else if (index === 5)
                color = "#EBA409"
                else if (index === 6)
                color = "#008CBA"
                return (
                  <div className="p-2">
                    <div className="d-flex justify-content-center" style={{width : "12vw" , height : "15vh" , backgroundColor : color }} >
                      <span className="text-white font-weight-bolder p-4" style={{"fontSize" : "1.3rem"}}>{content.name}</span>
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

export default connect(stateMapper)(APSliderTwo);
