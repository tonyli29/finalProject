import React, { useState, useEffect } from "react";
import House from "./house";

const HouseImage = props => {
  return (
    <div className="sub-images">
      {props.images.map(image => (
        <img src={image} />
      ))}
    </div>
  );
};

export default HouseImage;
