import React from "react";
import { connect } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import APSlider from './slider/slider'
import APCarousel from './slider/carousel'
import {fetchShows} from '../actions/showsActions'

class Shows extends React.Component {
  async componentDidMount() {
     this.props.fetchShows();
  }
  render() {
    return (
      <Container fluid>
      {this.props.shows && <APCarousel contents={this.props.shows} />}   
      {this.props.shows && <p className="text-white font-weight-bolder text-left mt-1 mb-1"style={{"marginLeft" : "55px"}} > Watch Latest shows </p>}
      {this.props.shows && <APSlider contents={this.props.shows}/>}    
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
    shows : state.shows.shows,
    crime : state.shows.crime,
    drama : state.shows.drama
  };
};

export default connect(stateMapper, {fetchShows})(Shows);
