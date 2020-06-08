import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import { MDBBtn } from "mdbreact";
import axios from "axios";
import { Link } from "react-router-dom";

class Bill extends React.Component {
  state = {
    order: {},
  };
  async addOrder() {
    let order = {
      userName: this.props.userName,
      userMobile: this.props.userNumber,
      items: this.props.items,
      totalPrice: this.props.total,
      paymentMode: this.props.paymentMode,
      tableId: this.props.tableId,
      waiterId: this.props.waiterId,
    };

    let url = `/orders`;
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "development") {
      url = `http://localhost:9000/orders`;
    }
    let request = await axios.post(url, order);
    this.fetchBillDetails(request.data.id);
  }
  async fetchBillDetails(id) {
    let url = `/orders/${id}`;
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "development") {
      url = `http://localhost:9000/orders/${id}`;
    }
    let orderData = await axios.get(url);
    console.log(orderData);
    this.setState(
      {
        order: orderData.data[0],
      },
      () => console.log("bill :", this.state)
    );
  }

  componentDidMount = () => {
    this.addOrder();
  };
  render() {
    return (
      <div className="">
        <h3 className="mt-2 mb-2 heavy-rain-gradient p-2 font-weight-normal blue-text z-depth-1">
          Order Summary{" "}
        </h3>
        <Zoom>
          {
            <Container
              fluid
              className="d-flex justify-content-center blue-gradient mt-3 border border-primary z-depth-1"
              style={{
                width: "28rem",
                height: "33rem",
              }}
            >
              <br />
              {this.state.order ? (
                <div className="mt-2 mb-2 mr-5">
                  <div>
                    <h5 className="white-text font-weight-bold mt-3">
                      Shahi Dhaba
                    </h5>
                    <p className="white-text font-weight-normal mt-1">
                      Thankyou For visiting
                    </p>
                  </div>
                  <hr></hr>
                  {this.state.order.userName && (
                    <p className="white-text mt-2">
                      Name : {this.state.order.userName}{" "}
                    </p>
                  )}
                  {this.state.order.userMobile && (
                    <p className="white-text  mt-1">
                      Number : {this.state.order.userMobile}{" "}
                    </p>
                  )}
                  {!this.state.order.items && (
                    <div>
                      <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}
                  {this.state.order.items && (
                    <span className="white-text mt-1">Items : </span>
                  )}
                  {this.state.order.items &&
                    this.state.order.items.map((val) => {
                      return (
                        <p className="white-text">
                          {val.itemName + " Quantity " + val.quantity}{" "}
                        </p>
                      );
                    })}
                  {this.state.order.totalPrice && (
                    <p className="white-text mt-1">
                      Total price : {this.state.order.totalPrice}{" "}
                    </p>
                  )}
                  {this.state.order.paymentMode && (
                    <p className="white-text mt-1">
                      Payment Mode : {this.state.order.paymentMode}{" "}
                    </p>
                  )}
                  {this.state.order.table && (
                    <p className="white-text">
                      Table selected : {this.state.order.table.name}{" "}
                    </p>
                  )}
                  {this.state.order.waiter && (
                    <p className="white-text">
                      waiter selected : {this.state.order.waiter.name}{" "}
                    </p>
                  )}
                </div>
              ) : (
                <div className="container mt-3 mb-5">
                  <Link to="/table">
                    {<MDBBtn color="primary">OOPS :( Try Again</MDBBtn>}
                  </Link>
                </div>
              )}
            </Container>
          }
        </Zoom>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};

export default connect(stateMapper)(Bill);
