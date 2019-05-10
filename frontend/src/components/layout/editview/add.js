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
    axios.post(`/api/houses/`, house).then(res => {
      if (res.status >= 201) {
        props.history.push("/edit");
      }
    });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label>
        <input placeholder="Thumbnail Image" type="text" name="image" />
      </label>
      <label>
        <input placeholder="Address" type="text" name="address" />
      </label>
      <label>
        <input placeholder="Price" type="text" name="price" />
      </label>
      <label>
        <input placeholder="Description:" type="text" name="description" />
      </label>
      <label>
        <input placeholder="Number of bedrooms" type="number" name="bedrooms" />
      </label>
      <label>
        <input
          placeholder="Number of bathrooms:"
          type="number"
          name="bathrooms"
        />
      </label>
      <label>
        <input placeholder="Property Type" type="text" name="property" />
      </label>
      <label>
        <input placeholder="Neighbourhood" type="text" name="neighbourhood" />
      </label>
      <label>
        <input placeholder="SqFt" type="text" name="sqft" />
      </label>
      <label>
        <input placeholder="Year Built" type="text" name="yearbuilt" />
      </label>
      <label>
        <input placeholder="Number of Stories" type="text" name="stories" />
      </label>
      <label>
        Basement:
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
