import React,{ Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import App from './app';
import Login from './login';
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <div>
      //     <Link to="/app">
      //       <div>App</div>
      //     </Link>
      //     <Link to="/login">
      //     <div>Login</div>
      //     </Link>
      //   </div>
      //   <Switch>
      //       <Route path="/app"><App/></Route>
      //       <Route path="/login"><Login/></Route>
      //   </Switch>
      // </BrowserRouter>
      <div>
        <App/>
      </div>
    );
  }
}

const stateMapper = (state) => {
    return state;
}

export default connect(stateMapper)(Home);
