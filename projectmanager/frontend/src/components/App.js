import React, { Component } from "react";
import ReactDOM from "react-dom";
import Houses from "./layout/houses";

const App = props => {
  return (
    <div className="app">
      <header>
        <h1>FakeEstate</h1>
      </header>
      <Houses />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
export default App;
