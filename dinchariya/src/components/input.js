import React,{Component} from 'react';

class Input extends Component{
    state = {
        todo : "",
        deadline : "",
        isCompleted : false
    }

    todoInputChange = (val) => {
        this.setState({
            todo : val,
        });
    }

    deadlineInputChange = (val) => {
        this.setState({
            deadline : val ,
        })
    }

    componentDidUpdate = (prevProps,prevState) => {
        console.log("INPUT CDU" , prevProps)
       if(prevProps.editTodoData !== this.props.editTodoData ){
           this.setState({

               todo : this.props.editTodoData.todo,
               deadline : this.props.editTodoData.deadline,
               isCompleted : this.props.editTodoData.isCompleted
           })
       }
    }

    render(){
        return(
            <div>
                <form onSubmit={(event) =>    { event.preventDefault(); if(this.props.isEdit){ this.props.updatedData(this.state) } else {this.props.getInputData(this.state) }} }>
                <div className="form-inline d-flex justify-content-center mt-5" >
                    <input className="form-control mb-2 mr-sm-2"  placeholder="Enter TODO" onChange={(e)=>{this.todoInputChange(e.target.value)}} value={this.state.todo} />
                    <input className="form-control mb-2 mr-sm-2" type="date"  placeholder="Enter deadline" onChange={(e)=>{this.deadlineInputChange(e.target.value)}} value={this.state.deadline} />
                  <button className="btn btn-outline-dark pr-5 pl-5 " type="submit" >{this.props.isEdit ? "UPDATE" : "ADD"}</button>
                </div>
            </form>
            </div>
        )
    }
 }

export default Input;