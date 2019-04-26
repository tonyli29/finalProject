import React, { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

const AddImage = props => {
  const [newImage, setNewImage] = useState({
    images: "",
    house: 0
  });

  const handleSubmit = event => {
    const image = {
      images: event.target.elements.newimage.value,
      house: event.target.elements.housenumber.value
    };
    axios.post(`/api/housesimages/`, image).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Image:
        <input type="text" name="newimage" />
      </label>
      <label>
        <input type="hidden" name="housenumber" value={props.houseid} />
      </label>
      <button type="submit">Add Image</button>
    </form>
  );
};

export default AddImage;
