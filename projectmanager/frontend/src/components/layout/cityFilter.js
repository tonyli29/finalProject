import React, { useState, useEffect } from "react";
import House from "./house";
import axios from "axios";
import Search from "./search";

const CityFilter = props => {
  const [houses, setHouses] = useState([]);
  let params = props.match.params.city;
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  let word = capitalizeFirstLetter(params);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/houses/?city=${word}&bedrooms=&bathrooms=&property_type=`
      )
      .then(res => {
        setHouses(res.data);
      });
  }, []);

  return (
    <div className="house-details">
      <h1>Houses in {word}</h1>
      <ul>
        {houses.map(home => (
          <House
            key={home.id}
            img={home.img}
            price={home.price}
            address={home.address}
            description={home.description}
            bedrooms={home.bedrooms}
            bathrooms={home.bathrooms}
            sqft={home.sqft}
            id={home.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default CityFilter;
