import React from "react";
import Search from "./search";
import { Redirect } from "react-router-dom";

// import Houses from "./houses";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const LandingPage = () => {
  const getResult = e => {
    const houseValue = e.target.elements.city.value.toLowerCase();
    e.preventDefault();
    console.log(houseValue);
    window.location = `http://localhost:8000/#/city/${houseValue}`;
  };

  return (
    <div className="landing-page">
      <div className="search-box">
        <h1>Search by city/neighbourhood</h1>
        <Search getResult={getResult} />
      </div>
    </div>
  );
};

export default LandingPage;
