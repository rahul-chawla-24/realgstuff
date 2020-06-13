import React from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import APSlider from './slider/slider'
import APSliderTwo from './slider/slider2'
import APCarousel from './slider/carousel'
import {fetchHomepageData} from '../actions/homepageActions'

class HomePage extends React.Component {
  async componentDidMount() {
     this.props.fetchHomepageData();
  }
  render() {
    return (
      <Container fluid>
      {this.props.tvShows && <APCarousel contents={this.props.tvShows} />}   
      {this.props.moviesAndShows && <p className="text-white font-weight-bolder text-left mt-1 mb-1"style={{"marginLeft" : "55px"}} > Latest movies and Shows </p>}
      {this.props.moviesAndShows && <APSlider contents={this.props.moviesAndShows}/>}    
      {this.props.movies && <p className="text-white font-weight-bolder text-left mt-1 mb-1"style={{"marginLeft" : "55px"}} > Watch Latest movies</p>}
      {this.props.movies && <APSlider contents={this.props.movies}/>}
      {this.props.genres && <p className="text-white font-weight-bolder text-left mt-1 mb-1"style={{"marginLeft" : "55px"}} > Watch By Genre</p>}
      {this.props.genres && <APSliderTwo contents={this.props.genres}/>}
      {this.props.tvShows && <p className="text-white font-weight-bolder text-left mt-1 mb-1"style={{"marginLeft" : "55px"}} > Watch Latest Shows</p>}
      {this.props.tvShows && <APSlider contents={this.props.tvShows}/>}
      </Container>
    );
  }
}

const stateMapper = state => {
  return {
    tvShows : state.homepage.tvShows,
    movies : state.homepage.movies,
    moviesAndShows : state.homepage.moviesAndShows,
    genres : state.homepage.genres
  };
};

export default connect(stateMapper, {fetchHomepageData})(HomePage);
