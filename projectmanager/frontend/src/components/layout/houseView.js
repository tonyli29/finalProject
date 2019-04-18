import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./form";
import HouseImage from "./houseImages";
const HouseView = props => {
  const [house, setHouse] = useState([]);
  const [contact, setContact] = useState({
    isOpen: false
  });

  const images = house.images;
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

        <h1>{house.address}</h1>
        <span>$$${house.price}</span>
        <br />
        <span>{house.description}</span>
        <br />
        <span>Bedrooms: {house.bedrooms}</span>
        <br />
        <span>Bathrooms: {house.bathrooms}</span>
        <br />
      </section>
      <div className="sub-images">
        <HouseImage images={house.images} />
      </div>
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
