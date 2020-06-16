import React, { Component } from "react";
import { connect } from "react-redux";
import { logout , guestLogin  } from "../actions/authActions";
import { Redirect, Link } from "react-router-dom";
import { setSearchItem } from "../actions/searchActions";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import "./search.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SignupModal from "./Home/SingupModal";
import LoginModal from "./Home/LoginModal";
class NavbarPage extends Component {
  state = {
    isOpen: false,
    searchTerm: "",
    toSearchPage: false,
    isHovered: false,
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleKeyPress(event) {
    if (event.charCode == 13) {
      event.preventDefault();
      if (this.state.searchTerm === "") {
        return;
      }
      this.props.setSearchItem(this.state.searchTerm);
      this.setState(
        {
          toSearchPage: true,
        },
        () => {
          console.log(this.state);
        }
      );
    }
  }

  handleSearch(event) {
    if (event.key === "Enter") {
      console.log(this.state.searchTerm);
    }
  }
  render() {
    if (this.state.toSearchPage === true) {
      return <Redirect to={`/search`} props={this.props} />;
      // const { href } = window.location;
      // window.location.href = `/search?item=${this.state.searchTerm}`;
    }
    return (
      <MDBNavbar
        className="p-2"
        style={{ "background-color": "#1C262D" }}
        expand="md"
      >
        <MDBNavbarBrand style={{ marginLeft: "55px" }}>
          <MDBNavLink to={this.props.isAuthenticated ? "/home" : "/"}>
            <strong className={`navbarItem font-weight-bold`}>CHILLMODE</strong>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            {this.props.isAuthenticated && (
              <MDBNavItem active>
                <MDBNavLink to={"/home"}>
                  <span className={"navbarItem font-weight-bold"}> Home </span>
                </MDBNavLink>
              </MDBNavItem>
            )}
            {this.props.isAuthenticated && (
              <MDBNavItem>
                <MDBNavLink to={"/movies"}>
                  <span className={"navbarItem font-weight-bold"}>
                    {" "}
                    Movies{" "}
                  </span>
                </MDBNavLink>
              </MDBNavItem>
            )}
            {this.props.isAuthenticated && (
              <MDBNavItem>
                <MDBNavLink to={"/shows"}>
                  <span className={"navbarItem font-weight-bold"}>
                    {" "}
                    Tv Shows{" "}
                  </span>
                </MDBNavLink>
              </MDBNavItem>
            )}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            {this.props.isAuthenticated && (
              <MDBNavItem className="mr-2">
                <MDBFormInline>
                  <div className="md-form my-0">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search"
                      // onKeyPress={(e) => {
                      //   this.handleKeyPress(e);
                      // }}
                      onChange={(e) => {
                        this.setState({ searchTerm: e.target.value });
                      }}
                    />
                  </div>
                  <div>
                    {this.state.searchTerm && (
                      <Link to={`/search?item=${this.state.searchTerm}`}>
                        <button className="myButton mr-sm-2" title="Search">
                          <MDBIcon icon="search" className="white-text " />
                        </button>
                      </Link>
                    )}
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            )}
            {this.props.isAuthenticated && (
              <MDBNavItem className="mr-5">
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <AccountCircleIcon fontSize="large" />
                    {this.props.user && (
                      <span className="text-white font-weight-normal ml-1">
                        {this.props.user.name}
                      </span>
                    )}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu basic>
                    <MDBDropdownItem>Watchlist</MDBDropdownItem>
                    <MDBDropdownItem>Account Settings</MDBDropdownItem>
                    <MDBDropdownItem onClick={() => this.props.logout()}>
                      Sign Out
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            )}
            {!this.props.isAuthenticated && (
              <MDBNavItem>
                <button
                  className="font-weight-bold navbarItem myButton p-2"
                  onClick={() => this.props.guestLogin()}
                >
                  Guest
                </button>
              </MDBNavItem>
            )}
            {!this.props.isAuthenticated && (
              <MDBNavItem>
                <SignupModal />
              </MDBNavItem>
            )}
            {!this.props.isAuthenticated && (
              <MDBNavItem className="mr-5">
                <LoginModal />
              </MDBNavItem>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

const stateMapper = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  };
};

export default connect(stateMapper, { logout, setSearchItem , guestLogin})(NavbarPage);
