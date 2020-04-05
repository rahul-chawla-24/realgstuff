import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class Cart extends React.Component {
  async addOrder() {
    let order = {
      userName: this.props.userName,
      userMobile: this.props.userNumber,
      items: this.props.items,
      totalPrice: this.props.total,
      paymentMode: this.props.paymentMode,
      tableId : this.props.tableId,
      waiterId : this.props.waiterId
    };

    let url = `http://localhost:9000/order`;
    let request = await axios.post(url,order);
     
    this.props.dispatch({
        type: "ORDER_ID",
        payload: request.data.id
      });

  }

  render() {
    return (
      <Container fluid>
        <div>
          <h4 className="text-light">My CART</h4>
        </div>
        <div
          className="d-flex mt-2 items"
          style={{ width: "100%", "min-height": "50vh" }}
        >
          <br />
          <table className="table" style={{}}>
            <thead className="thead-dark">
              <tr>
                {this.props.head && this.props.head.map(val => <th>{val}</th>)}
              </tr>
            </thead>
            <tbody className="bg-white">
              {this.props.items &&
                this.props.items.map((val, index) => (
                  <tr>
                    <td>
                      {val.itemName}
                      <button
                        onClick={() =>
                          this.props.dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: { val: val.itemNm, index: index }
                          })
                        }
                        className="btn btn-outline-danger btn-sm float-right"
                      >
                        remove
                      </button>
                    </td>
                    <td>{val.price}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {this.props.total && (
          <h5 className="text-white">Total price : {this.props.total}</h5>
        )}
        {!this.props.userName && (
          <span className="text-danger">Please Enter User Details</span>
        )}
        {this.props.userName && (
          <div className="container mt-2 mb-5">
            <Link to="/bill">
            <button className="btn btn-success float-center pt-1 pb-1 pl-5 pr-5" 
            onClick={ () => this.addOrder()}>
              Generate Bill
            </button>
            </Link>
          </div>
        )}
      </Container>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Cart);
