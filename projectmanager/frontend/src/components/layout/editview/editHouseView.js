import React, { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
import HouseImage from "../houseImages";
import { Link } from "react-router-dom";
const EditHouseView = props => {
  const [house, setHouse] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/houses/${props.match.params.id}`)
      .then(res => {
        setHouse(res.data);
      });
  }, []);

  const handleDelete = e => {
    axios
      .delete(`http://localhost:8000/api/houses/${props.match.params.id}`)
      .then(res => {
        if (res.status === 204) {
          props.history.push("/edit");
        }
      });
  };

  return (
    <div className="house-details">
      <section className="house-main">
        <img src={house.img} />

        <div className="house-info-box">
          <h1>{house.address}</h1>
          <span>$$${house.price}</span>
          <br />
          <span>{house.description}</span>
          <br />
          <span>Bedrooms: {house.bedrooms}</span>
          <br />
          <span>Bathrooms: {house.bathrooms}</span>
          <br />
        </div>
      </section>
      <HouseImage images={house.images || []} />

      <button type="submit" onClick={() => handleDelete()}>
        Delete
      </button>
    </div>
  );
};

export default EditHouseView;
