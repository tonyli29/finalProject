import React from "react";
import HouseView from "./houseView";
import axios from "axios";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const House = props => {
  const home = `/#/home/${props.id}`;

  const geoCode = address => {
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: address,
          key: "AIzaSyA2MmHNiHQuuBKpMsThUJzIdDBiiy8G8c0"
        }
      })
      .then(function(response) {
        let lat = response.data.results[0].geometry.location.lat;
        let long = response.data.results[0].geometry.location.lng;
        let output = `<h1>${long}, ${lat}</h1>`;
        document.querySelector("header").innerHTML = output;
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="house-box">
      <a href={home}>
        <li>
          <section>
            <div className="trim">
              <img src={props.img} />
            </div>
            <h1>{props.address}</h1>
            <span>${props.price}</span>
            <br />
            <span>{props.description}</span>
            <br />
            <span>Bedrooms: {props.bedrooms}</span>
            <br />
            <span>Bathrooms: {props.bathrooms}</span>
            <br />
          </section>
        </li>
      </a>
      <button onClick={() => geoCode(props.address)}>HHH</button>
      {/* Testing geo code finder but does work exactly as i like */}
    </div>
  );
};

export default House;
