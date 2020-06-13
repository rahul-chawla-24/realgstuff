import React from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import APSlider from './slider/slider'
import APCarousel from './slider/carousel'
import {fetchMovies} from '../actions/moviesActions'

class Movies extends React.Component {
  async componentDidMount() {
     this.props.fetchMovies();
  }
  render() {
    return (
      <Container fluid>
      {this.props.movies && <APCarousel contents={this.props.movies} />}   
      {this.props.movies && <p className="text-white font-weight-bolder text-left mt-1 mb-1"style={{"marginLeft" : "55px"}} > Watch Latest movies </p>}
      {this.props.movies && <APSlider contents={this.props.movies}/>}    
      {this.props.crime && <p className="text-white font-weight-bolder text-left mt-1 mb-1"style={{"marginLeft" : "55px"}} > Crime</p>}
      {this.props.crime && <APSlider contents={this.props.crime}/>}
      {this.props.drama && <p className="text-white font-weight-bolder text-left mt-1 mb-1"style={{"marginLeft" : "55px"}} > Drama</p>}
      {this.props.drama && <APSlider contents={this.props.drama}/>}
      </Container>
    );
  }
}

const stateMapper = state => {
  return {
    movies : state.movies.movies,
    crime : state.movies.crime,
    drama : state.movies.drama
  };
};

export default connect(stateMapper, {fetchMovies})(Movies);
