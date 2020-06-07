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
class Table extends React.Component {
  //
  async fetchTables() {
    // let id = this.props.match.params.id;
    // console.log(id);
    let url = `/tables`;
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "development") {
      url = `http://localhost:9000/tables`;
    }
    let data = await axios.get(url);
    console.log("Table Detail", data);

    this.props.dispatch({
      type: "TABLE_DETAIL",
      payload: data.data,
    });
  }
  setTableId = (value) => {
    this.props.dispatch({
      type: "TABLE_ID",
      payload: value,
    });
  };

  componentDidMount = () => {
    this.fetchTables();
  };

  render() {
    return (
      <div className="mt-3">
        <Container fluid>
          <h3 className="mt-2 mb-2 heavy-rain-gradient p-2 font-weight-normal blue-text z-depth-1">
            Please select a table{" "}
          </h3>
          {!this.props.table.length && (
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
            {this.props.table &&
              this.props.table.map((val) => {
                return (
                  <MDBCard
                    className={
                      "m-2" +
                      (val.id === this.props.tableId ? "border-0 selected" : "")
                    }
                    style={{
                      width: "17rem",
                      height: "18rem",
                    }}
                    onClick={() => {
                      this.setTableId(val.id);
                    }}
                    narrow
                  >
                    <MDBView wide cascade>
                      <MDBCardImage
                        hover
                        overlay="white-slight"
                        className="card-img-top "
                        src="https://hoteldesigns.net/wp-content/uploads/2018/06/01-800x533.jpg"
                        alt="food"
                      />
                    </MDBView>

                    <MDBCardBody>
                      <h5 className="blue-text">
                        <MDBIcon icon="chair" /> {val.name}
                      </h5>

                      <MDBCardText>{"Floor : " + val.floorNumber}</MDBCardText>

                      <MDBCardText>
                        {"Sitting Capacity : " + val.strength}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                );
              })}
          </div>
          <div className="container mt-3 mb-5">
            <Link to="/waiter">
              {this.props.tableId && (
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

export default connect(stateMapper)(Table);
