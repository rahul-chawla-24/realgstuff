import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import axios from "axios";

class Bill extends React.Component {
  state = {
    waiterName: "",
    tableName: "",
    order: {}
  };

  async fetchBillDetails() {
    let url = `http://localhost:9000/table/${this.props.tableId}`;
    let tableData = await axios.get(url);

    let url2 = `http://localhost:9000/waiter/${this.props.waiterId}`;
    let waiterData = await axios.get(url2);

    let url3 = `http://localhost:9000/order/${this.props.orderId}`;
    let orderData = await axios.get(url3);
    console.log("Table Detail", tableData, waiterData, orderData);
    this.setState({
      waiterName: waiterData.data[0].name,
      tableName: tableData.data[0].name,
      order: orderData.data[0]
    });
  }

  componentDidMount = () => {
    this.fetchBillDetails();
  };
  render() {
    return (
      <div className="">
        <h4 className="text-white mt-4 mb-2 d-flex justify-content-center">
          Order Summary{" "}
        </h4>
        <Container fluid className="d-flex justify-content-center mt-5">
          <br />
          {this.state.order && (
            <div>
              {this.state.order.userName && (
                <p className="text-white">
                  Name : {this.state.order.userName}{" "}
                </p>
              )}
              {this.state.order.userMobile && (
                <p className="text-white">
                  Number : {this.state.order.userMobile}{" "}
                </p>
              )}
              <span className="text-white">Items : </span>
              {this.state.order.items &&
                this.state.order.items.map(val => {
                  return <span className="text-white">{val.itemName} </span>;
                })}
              {this.state.order.totalPrice && (
                <p className="text-white">
                  Total price : {this.state.order.totalPrice}{" "}
                </p>
              )}
              {this.state.order.paymentMode && (
                <p className="text-white">
                  Payment Mode : {this.state.order.paymentMode}{" "}
                </p>
              )}
              {this.state.tableName && (
                <p className="text-white">
                  Table selected : {this.state.tableName}{" "}
                </p>
              )}
              {this.state.waiterName && (
                <p className="text-white">
                  waiter selected : {this.state.waiterName}{" "}
                </p>
              )}
            </div>
          )}
        </Container>
      </div>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Bill);
