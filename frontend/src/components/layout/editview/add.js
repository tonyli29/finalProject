import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const AddHouse = props => {
  AddHouse.propTypes = {
    auth: PropTypes.object.isRequired
  };

  const handleSubmit = e => {
    e.preventDefault();
    const house = {
      img: event.target.elements.image.value,
      user: props.auth.user.username,
      price: event.target.elements.price.value,
      address: event.target.elements.address.value,
      description: event.target.elements.description.value,
      bedrooms: event.target.elements.bedrooms.value,
      bathrooms: event.target.elements.bathrooms.value,
      property_type: event.target.elements.property.value,
      neighborhood: event.target.elements.neighbourhood.value,
      sqft: event.target.elements.sqft.value,
      year_built: event.target.elements.yearbuilt.value,
      number_of_stories: event.target.elements.stories.value,
      basement: event.target.elements.basement.value,
      images: []
    };
    axios.post(`http://localhost:8000/api/houses/`, house).then(res => {
      if (res.status === 201) {
        props.history.push("/edit");
      }
    });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label>
        Thumbnail image:
        <input type="text" name="image" />
      </label>
      <label>
        House Address:
        <input type="text" name="address" />
      </label>
      <label>
        Price:
        <input type="text" name="price" />
      </label>
      <label>
        Description:
        <input type="text" name="description" />
      </label>
      <label>
        Number of bedrooms:
        <input type="text" name="bedrooms" />
      </label>
      <label>
        Number of bathrooms:
        <input type="text" name="bathrooms" />
      </label>
      <label>
        Property Type:
        <input type="text" name="property" />
      </label>
      <label>
        Neighbourhood:
        <input type="text" name="neighbourhood" />
      </label>
      <label>
        SqFt:
        <input type="text" name="sqft" />
      </label>
      <label>
        Year Built:
        <input type="text" name="yearbuilt" />
      </label>
      <label>
        Number of Stories:
        <input type="text" name="stories" />
      </label>
      <label>
        Does is have a Basement:
        <input type="checkbox" name="basement" />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(AddHouse);
