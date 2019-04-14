import React, { useState, useEffect } from "react";
import axios from "axios";

const HouseView = props => {
  const [house, setHouse] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/houses/${props.match.params.id}`)
      .then(res => {
        setHouse(res.data);
      });
  }, []);

  return (
    <div className="house-details">
      <section>
        <img src={house.img} />

        <h1>{house.price}</h1>
        <span>{house.address}</span>
        <br />
        <span>{house.description}</span>
        <br />
        <span>Bedrooms: {house.bedrooms}</span>
        <br />
        <span>Bathrooms: {house.bathrooms}</span>
        <br />
      </section>
    </div>
  );
};

export default HouseView;
