import React, { useState, useEffect } from "react";
import House from "../house";
import EditHouse from "./editHouse";
import axios from "axios";

const Edit = () => {
  const [houses, setHouses] = useState([]);
  const [filter, setFilter] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const mapsKey = "AIzaSyCZfUHxZLHtErCuMSQgdUDvMDy0OTKoaF4";
  let userPosition = "";

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/houses/?neighboorhood=&bedrooms=&bathrooms=&property_type=`
      )
      .then(res => {
        setHouses(res.data);
        // geoList();
      });
  }, []);

  return (
    <div className="all-house">
      <a href="/#/edit/add">Add</a>
      <div className="house-list">
        <ul>
          {houses.map(home => (
            <EditHouse
              key={home.id}
              img={home.img}
              price={home.price}
              address={home.address}
              description={home.description}
              bedrooms={home.bedrooms}
              bathrooms={home.bathrooms}
              sqft={home.sqft}
              id={home.id}
              neighborhood={home.neighborhood}
              stories={home.number_of_stories}
              year_built={home.year_built}
              property_type={home.property_type}
              basement={home.basement}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Edit;
