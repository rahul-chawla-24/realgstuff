import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div>
        <ul className="list-group align-middle mt-2"style={{}} >
          {this.props.getList &&
            this.props.getList.map((val, index) => (
                <div className="d-flex justify-content-center">
              <li key={index} className="list-group-item mt-1 shadow p-2 mb-2 bg-white rounded"  style={{"width" : "50%"}}>
                  {val.isCompleted === false && <input className="mr-1" type="checkbox" onClick={(e)=>this.props.changeStatus(index,e.target.checked)}></input>}
                  {val.isCompleted === true && <small className="text-success"> Completed </small>}
                  {val.isCompleted === false && <small className="text-danger"> Active </small>}
                {" "}
                <span className="font-weight-bold mr-2 ml-2"> {val.todo} </span>
                <span className="font-weight-normal mr-1">{val.deadline} </span>
                { val.isCompleted === false && <i type="button" className="material-icons" onClick={()=> this.props.editInList(val)} >create</i>}{" "}
                <i type="button" className="material-icons text-danger" onClick={()=>this.props.remove(val)} >delete</i>{" "}
              </li>
              </div>
            ))}
        </ul>
      </div>
    );
  }
}

export default List;
