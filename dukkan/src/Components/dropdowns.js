import React from "react";
import { connect } from "react-redux";

class Dropdowns extends React.Component {
  render() {
    return (
      <div className="container d-flex justify-content-between mt-5">
        <div className="input-group-prepend mb-2 mr-sm-2">
          <label className="input-group-text btn btn-ouline-dark">
            Filter Area
          </label>
          <select //Default Value stored in redux State
            className="btn btn-dark"
            onChange={e => {
              this.props.dispatch({
                type: "AREA_FILTER_CHANGE",
                payload: e.target.value
              });
            }}
          >
            <option>All</option>
            {this.props.areaList.map(val => {
              return <option>{val}</option>;
            })}
          </select>
        </div>
        <div className="input-group-prepend mb-2 mr-sm-2">
          <label className="input-group-text">Filter Category</label>
          <select //Default Value stored in redux State
            className="btn btn-dark"
            onChange={e => {
              this.props.dispatch({
                type: "CATEGORY_FILTER_CHANGE",
                payload: e.target.value
              });
            }}
          >
            <option>All</option>
            {this.props.categoryList.map(val => {
              return <option>{val}</option>;
            })}
          </select>
        </div>
        <div className="input-group-prepend mb-2 mr-sm-2">
          <label className="input-group-text">Open / Close</label>
          <select //Default Value stored in redux State
            className="btn btn-dark"
            onChange={e => {
              this.props.dispatch({
                type: "DATE_FILTER_CHANGE",
                payload: e.target.value
              });
            }}
          >
            <option>All</option>
            <option>Open</option>
            <option>Close</option>
          </select>
        </div>
      </div>
    );
  }
}

const stateMapper = state => {
  return {
    areaList: state.app.areaList,
    categoryList: state.app.categoryList
  };
};
export default connect(stateMapper)(Dropdowns);
