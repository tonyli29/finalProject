import React, { useState, useEffect } from "react";
import House from "./house";
import axios from "axios";
import MapView from "./map/map";
import Search from "./search";

const FeaturedListings = () => {
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

  useEffect(() => {
    let tmpAddresses = [];
    let completedPromises = 0;
    houses.forEach(house => {
      axios
        .get("https://maps.googleapis.com/maps/api/geocode/json", {
          params: {
            address: house.address,
            key: "AIzaSyCZfUHxZLHtErCuMSQgdUDvMDy0OTKoaF4"
          }
        })
        .then(function(response) {
          if (response.data.error_message) {
            console.log("Error", response);
            alert("Error");
          }
          let lat = response.data.results[0].geometry.location.lat;
          let long = response.data.results[0].geometry.location.lng;
          tmpAddresses.push({
            name: house.address,
            coord: {
              lat: lat,
              lng: long
            }
          });

          completedPromises++;
          if (completedPromises === houses.length) {
            setAddresses(tmpAddresses);
            setLoaded(true);
          }
        })
        .catch(error => {
          completedPromises++;
          console.log(error);
          alert("Error");
          if (completedPromises === houses.length) {
            setAddresses(tmpAddresses);
            setLoaded(true);
          }
        });
    });
  }, [houses]);
  const userLocation = e => {
    navigator.geolocation.getCurrentPosition(position => {
      userPosition = position;
      console.log(userPosition);
    });
  };

  return (
    <div className="overlay">
      <div className="map-view">
        {loaded && (
          <MapView addresses={addresses} userPosition={userPosition} />
        )}
      </div>
    </div>
  );
};

export default FeaturedListings;
