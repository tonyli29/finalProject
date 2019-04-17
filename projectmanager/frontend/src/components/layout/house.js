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
          key: "AIzaSyCZfUHxZLHtErCuMSQgdUDvMDy0OTKoaF4"
        }
      })
      .then(function(response) {
        if (response.data.error_message) {
          console.log("Error", response);
        }
        let lat = response.data.results[0].geometry.location.lat;
        let long = response.data.results[0].geometry.location.lng;
        let output = { latitude: lat, longitude: long };
        console.log(output);
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
            <img src={props.img} />

            <h1>{props.address}</h1>
            <span>${props.price}</span>
            <br />
            <span>Bedrooms: {props.bedrooms}</span>
            <br />
            <span>Bathrooms: {props.bathrooms}</span>
            <br />
            <span>SqFt: {props.bathrooms}</span>
          </section>
        </li>
      </a>
      <button onClick={() => geoCode(props.address)}>HHH</button>
      {/* Testing geo code finder but does work exactly as i like */}
    </div>
  );
};

export default House;
