import React, { useState, useEffect } from "react";
import House from "./house";
import axios from "axios";
import Search from "./search";

const Houses = () => {
  const [houses, setHouses] = useState([]);
  let userPosition = "";

  useEffect(() => {
    axios.get("http://localhost:8000/api/houses").then(res => {
      setHouses(res.data);
    });
  }, []);

  const sortByPrice = e => {
    let housesCopy = houses.slice();
    setHouses(housesCopy.sort((a, b) => a.price - b.price));
    console.log("test");
  };

  const userLocation = e => {
    navigator.geolocation.getCurrentPosition(position => {
      userPosition = position;
      console.log(userPosition);
    });
  };

  const getResult = e => {
    e.preventDefault();
    console.log("work");
  };

  return (
    <div className="house-list">
      <Search getResult={getResult} />
      <button onClick={() => sortByPrice()}>Sort By price</button>
      <button onClick={() => userLocation()}>location</button>
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
            parking={home.parking}
            id={home.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Houses;
