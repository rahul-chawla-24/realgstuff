import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import User from "./user";

class Menu extends React.Component {
  //
  async fetchMenu() {
    // let id = this.props.match.params.id;
    // console.log(id);
    let url = `http://localhost:9000/menu`;
    let data = await axios.get(url);
    console.log("menu Detail", data);

    this.props.dispatch({
      type: "MENU_DETAIL",
      payload: data.data
    });
  }
  AddToCart = val => {
    this.props.dispatch({
      type: "ADD_TO_CART",
      payload: val
    });
  };

  componentDidMount = () => {
    this.fetchMenu();
  };

  render() {
    return (
      <div className="">
        <div>
          <User />
        </div>
        <Container fluid>
          <h3 className="mt-2 mb-2 text-white float-left ml-4 mt-2">
            Choose your menu{" "}
          </h3>
          <br />
          <div
            className="mt-5 items"
            style={{ width: "95%", "margin-left": "2vw", height: "25vh" }}
          >
            {this.props.menu &&
              this.props.menu.map(val => (
                <div className="shadow mb-1 bg-white rounded">
                  <ul className="list-group list-group-flush-sm ">
                    <li className="list-group-item">
                      {val.itemName} cusine- {val.cusineName}
                    </li>
                    <li className="list-group-item">₹ {val.price}</li>
                    <li className="list-group-item">
                      <button
                        onClick={() => this.AddToCart(val)}
                        className="btn btn-outline-success btn-sm"
                      >
                        Add to cart
                      </button>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </Container>
      </div>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Menu);
