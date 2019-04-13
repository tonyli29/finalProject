import React, { Component } from "react";
import ReactDOM from "react-dom";
import Houses from "./layout/houses";
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
      </header>
      <Router>
        <Switch>
          <Route exact path="/home" component={Houses} />
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
export default App;
