import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  Footer,
  NavLink
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import logo from './logo.png';
import "./index.css";

import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: ""
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () =>
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    return (
      <Router>
        <div className="flyout">
          <Navbar color="info-color" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
            <img src={logo} alt="" height="50" className="mt-1" />
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggleCollapse("mainNavbarCollapse")}
            />
            <Collapse
              id="mainNavbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <NavbarNav right>
                <NavItem>
                  <NavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/portfolio"
                  >
                    Portfolio
                  </NavLink>
                </NavItem>
                <NavItem>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/bio"
                  >
                    Bio
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
          {this.state.collapseID && overlay}
          <main style={{ marginTop: "4rem" }}>
            <Routes />
          </main>

          <Footer color="indigo">
            <p className="footer-copyright mb-0 py-3 text-center">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="://www.AppStacka.io"> AppStacka.io </a>
            </p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
