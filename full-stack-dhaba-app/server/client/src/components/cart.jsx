import React from "react";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { MDBIcon } from "mdbreact";
class Cart extends React.Component {
  AddToCart = (val) => {
    this.props.dispatch({
      type: "ADD_TO_CART",
      payload: val,
    });
  };
  DelFromCart = (val) => {
    this.props.dispatch({
      type: "REMOVE_FROM_CART",
      payload:  val,
    });
  };
  render() {
    return (
      <Container fluid>
        <div
          className="d-flex items"
          style={{ width: "100%", "min-height": "50vh" }}
        >
          <br />
          <table className="table" style={{}}>
            <thead className="blue-gradient">
              <tr>
                {this.props.head &&
                  this.props.head.map((val) => <th className="white-text font-weight-bold">{val}</th>)}
              </tr>
            </thead>
            <tbody className="bg-white">
              {this.props.items &&
                this.props.items.map((val, index) => (
                  <tr>
                    <td>
                      <span className="mr-3 font-weight-normal">
                        {val.itemName}
                      </span>

                      <MDBIcon
                        far
                        icon="minus-square"
                        className="mr-2 red-text font-weight-normal hoverable"
                        onClick={() => this.DelFromCart(val)}
                      />
                      <span className="mr-2 font-weight-normal">
                        {val.quantity}
                      </span>
                      <MDBIcon
                        far
                        icon="plus-square"
                        className="green-text hoverable"
                        onClick={() => this.AddToCart(val)}
                      />
                      {/* <button
                        
                        className="btn btn-outline-danger btn-sm float-right pt-0 pb-0 pr-3 pl-3"
                      >
                        remove
                      </button> */}
                    </td>
                    <td className="font-weight-bold blue-text">
                      {"₹ " + val.price}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Container>
    );
  }
}

const stateMapper = (state) => {
  return state;
};

export default connect(stateMapper)(Cart);
