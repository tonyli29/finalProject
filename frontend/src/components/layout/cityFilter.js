import React, { useState, useEffect } from "react";
import House from "./house";
import axios from "axios";
import MapView from "./map/map";
import Search from "./search";

const CityFilter = props => {
  const [houses, setHouses] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let userPosition = "";

  let params = props.match.params.neighbourhood;
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
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
  let word = titleCase(params);

  useEffect(() => {
    axios
      .get(
        `/api/houses/?neighborhood=${word}&bedrooms=&bathrooms=&property_type=`
      )
      .then(res => {
        setHouses(res.data);
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

  const sortByPrice = e => {
    let housesCopy = houses.slice();
    setHouses(housesCopy.sort((a, b) => a.price - b.price));
  };

  const userLocation = e => {
    navigator.geolocation.getCurrentPosition(position => {
      userPosition = position;
      console.log(userPosition);
    });
  };

  return (
    <div className="all-house">
      <div className="house-list">
        <h1>Houses in {word}</h1>
        <button onClick={() => sortByPrice()}>Sort By price</button>
        <button className=".btn-default" onClick={() => sortBySize()}>
          Sort By sqft {"(high to low)"}{" "}
        </button>
        <button onClick={() => sortByYear()}>
          Sort By Year{"(Newest to oldest)"}{" "}
        </button>
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
              neighborhood={home.neighborhood}
              stories={home.number_of_stories}
              year_built={home.year_built}
            />
          ))}
        </ul>
      </div>
      {loaded && <MapView addresses={addresses} userPosition={userPosition} />}
    </div>
  );
};

export default CityFilter;
