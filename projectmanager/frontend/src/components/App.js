import React, { Component } from "react";
import ReactDOM from "react-dom";
import Houses from "./layout/houses";
import LandingPage from "./layout/landingPage";
import HouseView from "./layout/houseView";
import NavBar from "./layout/navBar";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const App = props => {
  return (
    <div className="app">
      <header>
        <a href="/">House.Com</a>
        <NavBar />
      </header>
      <Router>
        <Switch>
          <Route exact path="/home" component={Houses} />
          <Route exact path="/home/:id" component={HouseView} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
export default App;
