import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Waiter extends React.Component {
  //
  async fetchWaiter() {
    // let id = this.props.match.params.id;
    // console.log(id);
    let url = `http://localhost:9000/waiter`;
    let data = await axios.get(url);
    console.log("Waiter Detail", data);

    this.props.dispatch({
      type: "WAITER_DETAIL",
      payload: data.data
    });
  }
  setWaiterId = value => {
    this.props.dispatch({
      type: "WAITER_ID",
      payload: value
    });
  };

  componentDidMount = () => {
    this.fetchWaiter();
  };

  render() {
    return (
      <div className="">
        <Container fluid >
            <h3 className="mt-2 mb-2 text-white">Please select a waiter </h3>
          <div className="tables" >
          {this.props.waiter &&
            this.props.waiter.map(val => {
              return (
                <div
                  className={
                    "card mr-3 mt-4 " +
                    (val.id === this.props.waiterId ? "selected" : "")
                  }
                  style={{ width: "15rem", height: "45vh" }}
                  onClick={() => {
                    this.setWaiterId(val.id);
                  }}
                >
                  <img
                    src="https://cdn3.vectorstock.com/i/1000x1000/87/17/the-waiter-man-in-a-suit-holding-a-tray-on-a-white-vector-22848717.jpg"
                    alt="Alps"
                    style={{ width: "15rem", height: "40vh" }}
                  />
                  <span style={{ "align-self": "center" }} className="mt-2">
                    {val.name} Rating-{val.rating}
                  </span>
                </div>
              );
            })}
            </div>
            <div className="container mt-2 mb-5">
            <Link to="/order">
              {this.props.waiterId && <button className="btn btn-success float-right pt-1 pb-1 pl-5 pr-5">Next</button>}
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Waiter);
