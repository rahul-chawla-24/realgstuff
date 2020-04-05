import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Table extends React.Component {
  //
  async fetchTables() {
    // let id = this.props.match.params.id;
    // console.log(id);
    let url = `http://localhost:9000/table`;
    let data = await axios.get(url);
    console.log("Table Detail", data);

    this.props.dispatch({
      type: "TABLE_DETAIL",
      payload: data.data
    });
  }
  setTableId = value => {
    this.props.dispatch({
      type: "TABLE_ID",
      payload: value
    });
  };

  componentDidMount = () => {
    this.fetchTables();
  };

  render() {
    return (
      <div className="">
        <Container fluid >
        <h3 className="mt-2 mb-2 text-white">Please select a table </h3>
          <div className="tables" >
          {this.props.table &&
            this.props.table.map(val => {
              return (
                <div
                  className={
                    "card mr-3 mt-4 " +
                    (val.id === this.props.tableId ? "selected" : "")
                  }
                  style={{ width: "17rem", height: "45vh" }}
                  onClick={() => {
                    this.setTableId(val.id);
                  }}
                >
                  <img
                    src="https://hoteldesigns.net/wp-content/uploads/2018/06/01-800x533.jpg"
                    alt="Alps"
                    style={{ width: "17rem", height: "40vh" }}
                  />
                  <span style={{ "align-self": "center" }} className="mt-2">
                    {val.name} Seats-{val.strength} Floor- {val.floorNumber}
                  </span>
                </div>
              );
            })}
            </div>
            <div className="container mt-2 mb-5">
            <Link to="/waiter">
              {this.props.tableId && <button className="btn btn-success float-right pt-1 pb-1 pl-5 pr-5">Next</button>}
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

export default connect(stateMapper)(Table);
