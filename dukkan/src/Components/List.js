import React from "react";
import { connect } from "react-redux";

class List extends React.Component {
  render() {
    return (
      <div className="d-flex  justify-content-center mt-3" style={{}}>
        <ul className="list-group d-flex flex-wrap">
          {this.props.shopList &&
            this.props.shopList.map(val => {
              return (
                <li className="list-group-item m-1 shadow p-2 mb-2 bg-white rounded">
                  <span className="font-weight-light mr-1">Shop :</span>
                  <span className="font-weight-bolder mr-2">
                    {val.shopName}
                  </span>
                  <span className="font-weight-light mr-1">Area :</span>
                  <span className="font-weight-bold mr-2">{val.area}</span>
                  <span className="font-weight-light mr-1">Category :</span>
                  <span className="font-weight-bold mr-2">{val.category}</span>
                  <span className="font-weight-light mr-1">Open:</span>
                  {val.isOpened == true && (
                    <span className="text-success mr-2">{val.openingDate}</span>
                  )}
                  {val.isOpened == false && (
                    <span className="text-danger mr-2">{val.openingDate}</span>
                  )}
                  <span className="font-weight-light mr-1">To:</span>
                  {val.isOpened == true && (
                    <span className="text-success mr-2">{val.closingDate}</span>
                  )}
                  {val.isOpened == false && (
                    <span className="text-danger mr-2">{val.closingDate}</span>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

const stateMapper = state => {
  return {
    shopList: state.app.shopListCopy
  };
};

export default connect(stateMapper)(List);
