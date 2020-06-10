import React,{Component} from 'react';

class Dropdown extends Component {
    render(){
        return(
            <div className="">
              <div className="dropdown d-flex justify-content-center">
            <button className="btn btn-outline-dark dropdown-toggle pr-5 pl-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Status
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <p className="dropdown-item" onClick={()=>this.props.getStatus("all")}>All</p>
                <p className="dropdown-item" onClick={()=>this.props.getStatus("completed")}>Completed</p>
                <p className="dropdown-item" onClick={()=>this.props.getStatus("active")}>Active</p>
            </div>
            </div>
            </div>
        )
    }
}

export default Dropdown;