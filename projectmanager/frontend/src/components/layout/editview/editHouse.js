import React from "react";
import axios from "axios";

const EditHouse = props => {
  const home = `/#/homeEdit/${props.id}`;

  return (
    <div className="house-box">
      <a href={home}>
        <li>
          <section>
            <img src={props.img} />

            <div className="text-box">
              <h1>{props.address}</h1>
              <span>${props.price}</span>
              <br />
              <span>Bedrooms: {props.bedrooms}</span>
              <br />
              <span>Bathrooms: {props.bathrooms}</span>
              <br />
              <span>SqFt: {props.sqft}</span>
              <span>Neighbourhood: {props.neighbourhood}</span>
              <span>Year Built: {props.year_built}</span>
            </div>
          </section>
        </li>
      </a>
    </div>
  );
};

export default EditHouse;
