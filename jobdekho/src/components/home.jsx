import React, { Component } from "react";
import Candidate from "./candidates";
import BreadcrumbPage from "./breadcrumb";
import NavbarPage from "./navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Applications from "./Applications";
import ApplicationInfo from "./applicationInfo";
import Questions from "./questions";
class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <MDBContainer fluid className="p-0">
          <NavbarPage />
          <BreadcrumbPage />
          <MDBRow>
            <MDBCol size={12}>
              <Switch>
                <Route exact path="/candidate" component={Candidate} />
                <Route exact path="/application" component={Applications} />
                <Route exact path="/question" component={Questions} />
                <Route
                  exact
                  path="/application/:id"
                  component={ApplicationInfo}
                />
              </Switch>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </BrowserRouter>
    );
  }
}

export default Home;
