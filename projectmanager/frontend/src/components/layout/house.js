import React from "react";

const House = props => {
  return (
    <li>
      <section>
        <img src={props.img} />
        <h1>{props.price}</h1>
        <span>{props.address}</span>
        <br />
        <span>{props.description}</span>
        <br />
        <span>Bedrooms: {props.bedrooms}</span>
        <br />
        <span>Bathrooms: {props.bathrooms}</span>
        <br />
      </section>
    </li>
  );
};

export default House;
