import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./form";
import HouseImage from "./houseImages";
import DetailMap from "./map/detailMap";
const HouseView = props => {
  const [house, setHouse] = useState([]);
  const [coord, setCoord] = useState({});
  const [contact, setContact] = useState({
    isOpen: false
  });
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/houses/${props.match.params.id}`)
      .then(res => {
        setHouse(res.data);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://maps.googleapis.com/maps/api/geocode/json", {
  //       params: {
  //         address: house.address,
  //         key: "AIzaSyCZfUHxZLHtErCuMSQgdUDvMDy0OTKoaF4"
  //       }
  //     })
  //     .then(res => {
  //       let lat = res.data.results[0].geometry.location.lat;
  //       let long = res.data.results[0].geometry.location.lng;
  //       setCoord({ lat: lat, lng: long });
  //       console.log(coord);
  //     });
  // });

  const h = () => {
    if (house.basement) {
      return "Full";
    } else {
      return "None";
    }
  };

  return (
    <div className="house-details">
      <section className="house-main">
        <div className="house-images">
          <img src={house.img} />
          <HouseImage images={house.images || []} />
        </div>
        <div className="house-info-box">
          <h1>{house.address}</h1>
          <span>$$${house.price}</span>
          <span>{house.description}</span>
          <span>Bedrooms: {house.bedrooms}</span>
          <span>Bathrooms: {house.bathrooms}</span>
          <span>Property Type: {house.property_type}</span>
          <span>City: {house.city}</span>
          <span>Neighborhood: {house.neighborhood}</span>
          <span>SqFt: {house.sqft}</span>
          <span>Year Built: {house.year_built}</span>
          <span>Stories: {house.number_of_stories}</span>
          <span>Basement: {h()}</span>
          <div />
        </div>
      </section>
      <DetailMap />

      <button onClick={() => setContact({ isOpen: true })}>Contact</button>
      <ContactForm
        address={house.address}
        isOpen={contact.isOpen}
        onClose={() => setContact({ isOpen: false })}
      />
    </div>
  );
};

export default HouseView;
