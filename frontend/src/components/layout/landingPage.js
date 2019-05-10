import React from "react";
import Search from "./search";
import { Redirect } from "react-router-dom";

// import Houses from "./houses";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const LandingPage = () => {
  const titleCase = str => {
    let splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  };

  const getResult = e => {
    const houseValue = e.target.elements.neighbourhood.value.toLowerCase();
    e.preventDefault();
    console.log(titleCase(houseValue));
    window.location = `/#/neighbourhood/${houseValue}`;
  };

  return (
    <div className="landing-page">
      <div className="search-box">
        <h1>Search by neighbourhood</h1>
        <Search getResult={getResult} />
        <p>First portfolio piece</p>
        <p>Portfolio webpage under construction</p>
        <strong>
          <p>For more info click the "about" button one the nav bar</p>
        </strong>
      </div>
    </div>
  );
};

export default LandingPage;
