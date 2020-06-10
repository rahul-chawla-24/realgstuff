import React from 'react';
import Input from './components/input';
import List from './components/List';
import Dropdown from './components/dropdown';
import './App.css';

class App extends React.Component{

  state = {
    allTodoList : [],
    completedTodoList : [],
    activeTodoList : [],
    status : "",
    isEdit : false,
    editTodoData : {},
    editIndex : ""
  }

  pushInputData = (currTodo)=>{
    let newTodoList = this.state.allTodoList.slice();
    currTodo.isCompleted = false;
    newTodoList.push(currTodo);
    let newCompletedTodoList = newTodoList.filter((val)=>{ return val.isCompleted === true });
    let newActiveTodoList = newTodoList.filter((val)=>{ return val.isCompleted === false });
    this.setState({
      allTodoList : newTodoList,
      completedTodoList : newCompletedTodoList,
      activeTodoList : newActiveTodoList
    },()=>{console.log(this.state.allTodoList)})
    
  }

  setStatus = (currStatus) => {
    this.setState({
      status : currStatus
    })
    
  }

  removeFromAll = (val)=>{
    let newTodoList = this.state.allTodoList.slice();
    let index = newTodoList.indexOf(val);
    newTodoList.splice(index,1);
     let newCompletedTodoList = newTodoList.filter((val)=>{ return val.isCompleted === true });
    let newActiveTodoList = newTodoList.filter((val)=>{ return val.isCompleted === false });
    this.setState({
      allTodoList : newTodoList,
      completedTodoList : newCompletedTodoList,
      activeTodoList : newActiveTodoList
    })
  }

  changeStatus = (index,value) => {
    let newTodoList = this.state.allTodoList.slice();
    newTodoList[index].isCompleted = value ;
    let newCompletedTodoList = newTodoList.filter((val)=>{ return val.isCompleted === true });
    let newActiveTodoList = newTodoList.filter((val)=>{ return val.isCompleted === false });
    this.setState({
      allTodoList : newTodoList,
      completedTodoList : newCompletedTodoList,
      activeTodoList : newActiveTodoList
    })
  }

  editList = (value) => {
    let newTodoList = this.state.allTodoList.slice();
    let index = newTodoList.indexOf(value);

    this.setState({
      isEdit: true,
      editTodoData : this.state.allTodoList[index],
      editIndex : index
    })   
  }
  updateInputData = (updatedData) => {
    let newTodoList = this.state.allTodoList.slice();
    newTodoList[this.state.editIndex]= updatedData ;
    let newCompletedTodoList = newTodoList.filter((val)=>{ return val.isCompleted === true });
    let newActiveTodoList = newTodoList.filter((val)=>{ return val.isCompleted === false });
    this.setState({
      allTodoList : newTodoList,
      completedTodoList : newCompletedTodoList,
      activeTodoList : newActiveTodoList
    },()=>{console.log(this.state.allTodoList)}) 
  }

  render(){
  return (
    <div className="App">
      <Input getInputData = {(currTodo) => this.pushInputData(currTodo)} isEdit={this.state.isEdit} editTodoData={this.state.editTodoData} updatedData ={(updatedData) => this.updateInputData(updatedData)}/>
      <Dropdown getStatus = {(status) => this.setStatus(status) }/>
     {(this.state.status === "all" || this.state.status === "" ) && <List getList={this.state.allTodoList} remove={(val) => this.removeFromAll(val)} changeStatus={(index,value)=>this.changeStatus(index,value)} editInList={(value) => this.editList(value) } />} 
     {this.state.status === "completed" && <List getList={this.state.completedTodoList} remove={(val)=> this.removeFromAll(val)} changeStatus={(index,value)=>this.changeStatus(index,value)} editInList={(value) => this.editList(value) } />}
     {this.state.status === "active" && <List getList={this.state.activeTodoList} remove={(val)=> this.removeFromAll(val)} changeStatus={(index,value)=>this.changeStatus(index,value)} editInList={(value) => this.editList(value)} />}
    </div>
  );

 }

}

export default App;
