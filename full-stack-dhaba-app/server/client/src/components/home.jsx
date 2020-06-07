import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import NTNavbar from "./navbar";
import Table from "./table";
import Waiter from "./waiter";
import Order from './order'
import Bill from './bill'
import{ Redirect ,Route} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <NTNavbar />
        <Switch>
          <Route exact path="/">
          <Redirect exact from="/" to="/table" />
          </Route>
          <Route path="/table"> 
            <Table/>
          </Route>
          <Route path="/waiter"> 
            <Waiter/>
          </Route>
          <Route path="/order"> 
            <Order/>
          </Route>
          <Route path="/bill"> 
            <Bill/>
          </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const stateMapper = state => {
  return state;
};

export default connect(stateMapper)(Home);
