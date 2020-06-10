import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { CardDeck, Card, CardGroup, CardColumns } from "react-bootstrap";

class Videos extends Component {
  fetchVideos = () => {
    let videos = axios.get(`https://www.googleapis.com/youtube/v3/videos/`, {
      params: {
        part: "snippet",
        chart: "mostPopular",
        key: "AIzaSyB3DvOeXqBiCcnBwdl4f5CkCPx5FSPYzF4"
      }
    });
    videos
      .then(data => {
        console.log(data);
        this.props.dispatch({
          type: "VIDEOS_FETCHED",
          payload: data.data.items
        });
      })
      .catch(error => {
        this.props.dispatch({
          type: "VIDEOS_FETCH_FAILED",
          payload: error
        });
      });
  };

  componentDidMount() {
    this.fetchVideos();
  }

  render() {
    console.log(this.props);
    return (
      <div className="d-flex flex-wrap mt-5">
        {this.props.videosReducer.videos &&
          this.props.videosReducer.videos.map((val, index) => {
            return (
              <div className="w3-card-4 mr-2 mt-2" style={{width : "20rem","box-shadow" : "none"}}>
                <img src={val.snippet.thumbnails.medium.url} alt="Alps"  style={{width : "20rem"}}/>
                <div className="w3-container w3-center">
                  <p className="font-weight-normal">{val.snippet.title}</p>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Videos);
