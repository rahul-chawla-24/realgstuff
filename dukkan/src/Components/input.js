import React from "react";
import { connect } from "react-redux";

class Input extends React.Component {
  state = {
    shopName: "",
    area: "Jayanagar", // by default first one
    category: "Grocery", // by default first one
    openingDate: "",
    closingDate: "",
    isOpened: false
  };

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!this.state.shopName) {
            alert("Please enter shop name");
          } else if (!this.state.openingDate || !this.state.closingDate) {
            alert("Please enter dates");
          } else {
            this.props.dispatch({
              type: "SUBMIT",
              payload: this.state
            });
          }
        }}
      >
        <div className="form-inline d-flex justify-content-center mt-5">
          <input
            className="form-control mb-2 mr-sm-2"
            placeholder="Shop Name"
            onChange={e => {
              this.setState({ shopName: e.target.value });
            }}
          />
          <div className="input-group-prepend mb-2 mr-sm-2">
            <label className="input-group-text">Area</label>
            <select
              className="custom-select" //Default Value stored in State
              onChange={e => {
                this.setState({ area: e.target.value });
              }}
            >
              {this.props.areaList.map(val => {
                return <option>{val}</option>;
              })}
            </select>
          </div>
          <div className="input-group-prepend mb-2 mr-sm-2">
            <label className="input-group-text">Category</label>
            <select
              className="form-control" //Default Value stored in State
              onChange={e => {
                this.setState({ category: e.target.value });
              }}
            >
              {this.props.categoryList.map(val => {
                return <option>{val}</option>;
              })}
            </select>
          </div>
          <div className="input-group-prepend mb-2 mr-sm-2">
            <label className="input-group-text">Opening Date</label>
            <input
              className="form-control"
              type="date"
              onChange={e => {
                this.setState({ openingDate: e.target.value });
              }}
            />
          </div>
          <div className="input-group-prepend mb-2 mr-sm-2">
            <label className="input-group-text">Closing Date</label>
            <input
              className="form-control"
              type="date"
              onChange={e => {
                this.setState({ closingDate: e.target.value });
              }}
            />
          </div>
          <button className="btn btn-dark pr-5 pl-5 " type="submit">
            ADD
          </button>
        </div>
      </form>
    );
  }
}

const stateMapper = state => {
  return {
    areaList: state.app.areaList,
    categoryList: state.app.categoryList
  };
};
export default connect(stateMapper)(Input);
