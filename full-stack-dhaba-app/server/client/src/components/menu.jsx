import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import {
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBView,
} from "mdbreact";

class Menu extends React.Component {
  //
  async fetchMenu() {
    // let id = this.props.match.params.id;
    // console.log(id);
    let url = `/menus`;
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "development") {
      url = `http://localhost:9000/menus`;
    }
    let data = await axios.get(url);
    console.log("menu Detail", data);

    this.props.dispatch({
      type: "MENU_DETAIL",
      payload: data.data,
    });
  }
  AddToCart = (val) => {
    this.props.dispatch({
      type: "ADD_TO_CART",
      payload: val,
    });
  };

  componentDidMount = () => {
    this.fetchMenu();
  };

  render() {
    return (
      <div className="mt-3">
        <Container fluid>
          <h3 className="mt-2 mb-2 heavy-rain-gradient p-2 font-weight-normal blue-text z-depth-1">
            Choose Your Menu{" "}
          </h3>
          {!this.props.menu.length && (
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
          <div className="d-flex flex-wrap justify-content-center">
            {this.props.menu &&
              this.props.menu.map((val) => {
                return (
                  <MDBCard
                    className={"m-2"}
                    style={{
                      width: "17rem",
                      height: "19rem",
                    }}
                    narrow
                  >
                    <MDBView wide cascade>
                      <MDBCardImage
                        hover
                        overlay="white-slight"
                        className="card-img-top "
                        src="https://img4.nbstatic.in/tr:w-500/5c8627a046e0fb000dbad094.jpg"
                        alt="food"
                        style={{ height: "50%" }}
                      />
                    </MDBView>

                    <MDBCardBody>
                      <p className="font-weight-normal float-left mr-3">
                        {val.itemName}
                      </p>
                      <p className="blue-text float-right ">
                        <MDBIcon icon="hamburger" /> {val.cusineName}
                      </p>
                      <br></br>
                      <small className="float-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor .
                      </small>
                      <br></br>
                      <span className="float-left mt-1 font-weight-bold blue-text">
                        {"₹ " + val.price}
                      </span>
                      <div className="">
                        <button
                          onClick={() => this.AddToCart(val)}
                          className="btn btn-outline-success btn-sm pt-1 pb-1 pr-3 pl-3 float-right"
                        >
                          Add to cart
                        </button>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                );
              })}
          </div>
        </Container>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return state;
};

export default connect(stateMapper)(Menu);
