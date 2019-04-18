import React, { Component } from "react";
import ReactDOM from "react-dom";
import Houses from "./layout/houses";
import LandingPage from "./layout/landingPage";
import HouseView from "./layout/houseView";
import NavBar from "./layout/navBar";
import Testing from "./layout/testing";
import CityFilter from "./layout/cityFilter";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import FeaturedListings from "./layout/featured";

const App = props => {
  return (
    <div className="app">
      <header>
        <h1>
          <a href="/">House.Com</a>
        </h1>
        <NavBar />
      </header>
      <Router>
        <Switch>
          <Route exact path="/home" component={Houses} />
          <Route exact path="/home/:id" component={HouseView} />
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/neighbourhood/:neighbourhood"
            component={CityFilter}
          />
          <Route exact path="/featured" component={FeaturedListings} />
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
export default App;
