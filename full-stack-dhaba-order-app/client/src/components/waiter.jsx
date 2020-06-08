import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
  MDBIcon,
  MDBView,
  MDBCardText,
} from "mdbreact";
import '../App.css'
class Waiter extends React.Component {
  //
  async fetchWaiter() {
    // let id = this.props.match.params.id;
    // console.log(id);
    let url = `/waiters`;
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV === "development") {
       url = `http://localhost:9000/waiters`;
    }
    let data = await axios.get(url);
    console.log("Waiter Detail", data);

    this.props.dispatch({
      type: "WAITER_DETAIL",
      payload: data.data,
    });
  }
  setWaiterId = (value) => {
    this.props.dispatch({
      type: "WAITER_ID",
      payload: value,
    });
  };

  createStars = (value) => {
    let stars = []
    for(let i = 1 ; i <= 5 ; i++){
      if(value > 0){
        stars.push(<MDBIcon icon="star" className="checked"/>)
        value--;
      }
      else{
        stars.push(<MDBIcon far icon="star" className="checked"/>)
      }
    }
    return stars;
  }

  componentDidMount = () => {
    this.fetchWaiter();
  };

  render() {
    return (
      <div className="mt-3">
        <Container fluid>
          <h3 className="mt-2 mb-2 heavy-rain-gradient p-2 font-weight-normal blue-text z-depth-1">
            Please select a Waiter{" "}
          </h3>
          {!this.props.waiter.length && (
            <div className="mt-5">
              {" "}
              <div className="spinner-grow text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-danger" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow text-info" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
          <div className="tables">
            {this.props.waiter &&
              this.props.waiter.map((val) => {
                return (
                  <MDBCard
                    className={
                      "m-2" +
                      (val.id === this.props.waiterId ? "border-0 selected" : "")
                    }
                    style={{
                      width: "17rem",
                      height: "18 rem",
                    }}
                    onClick={() => {
                      this.setWaiterId(val.id);
                    }}
                    narrow
                  >
                    <MDBView wide cascade>
                      <MDBCardImage
                        hover
                        overlay="white-slight"
                        className="card-img-top "
                        src="https://cdn3.vectorstock.com/i/1000x1000/87/17/the-waiter-man-in-a-suit-holding-a-tray-on-a-white-vector-22848717.jpg"
                        alt="food"
                      />
                    </MDBView>

                    <MDBCardBody>
                      <h5 className="blue-text">
                        <MDBIcon icon="concierge-bell" /> {val.name}
                      </h5>

                      <MDBCardTitle className="font-weight-bold">
                        {val.flooorNumber}
                      </MDBCardTitle>
                      <div>
                        {this.createStars(val.rating)}
                      </div>
                      <MDBCardText>{"Rating :" + val.rating}</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                );
              })}
          </div>
          <div className="container mt-3 mb-5">
            <Link to="/order">
              {this.props.waiterId && (
                <MDBBtn outline color="primary">
                  NEXT
                </MDBBtn>
              )}
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};

export default connect(stateMapper)(Waiter);
