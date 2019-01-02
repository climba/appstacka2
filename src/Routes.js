import React from "react";
import { Route, Switch } from "react-router-dom";


import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectsPage2 from "./pages/ProjectsPage2";
import ContactPage from "./pages/ContactPage";
import BioPage from "./pages/BioPage";


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/projects" component={ProjectsPage2} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/bio" component={BioPage} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
