import React, { useState, useEffect } from "react";
import axios from "axios";
import HouseImage from "../houseImages";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AddImage from "./addImage";

const EditHouseView = props => {
  const [house, setHouse] = useState([]);

  EditHouseView.propTypes = {
    auth: PropTypes.object.isRequired
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/houses/${props.match.params.id}`)
      .then(res => {
        setHouse(res.data);
      });
  }, []);

  const handleDelete = e => {
    let result = confirm("Are you sure you want to delete?");
    if (result) {
      axios
        .delete(`http://localhost:8000/api/houses/${props.match.params.id}`)
        .then(res => {
          if (res.status === 204) {
            props.history.push("/edit");
          }
        });
    }
  };

  const handleUpdate = e => {
    const houseUpdate = {
      img: event.target.elements.image.value,
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
    axios
      .put(
        `http://localhost:8000/api/houses/${props.match.params.id}/`,
        houseUpdate
      )
      .then(res => {
        console.log(res);
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
      <form className="edit-form" onSubmit={handleUpdate}>
        <label>
          Thumbnail image:
          <input type="text" name="image" defaultValue={house.img} />
        </label>
        <label>
          House Address:
          <input type="text" name="address" defaultValue={house.address} />
        </label>
        <label>
          Price:
          <input type="text" name="price" defaultValue={house.price} />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            defaultValue={house.description}
          />
        </label>
        <label>
          Number of bedrooms:
          <input type="text" name="bedrooms" defaultValue={house.bedrooms} />
        </label>
        <label>
          Number of bathrooms:
          <input type="text" name="bathrooms" defaultValue={house.bathrooms} />
        </label>
        <label>
          Property Type:
          <input
            type="text"
            name="property"
            defaultValue={house.property_type}
          />
        </label>
        <label>
          Neighbourhood:
          <input
            type="text"
            name="neighbourhood"
            defaultValue={house.neighborhood}
          />
        </label>
        <label>
          SqFt:
          <input type="text" name="sqft" defaultValue={house.sqft} />
        </label>
        <label>
          Year Built:
          <input type="text" name="yearbuilt" defaultValue={house.year_built} />
        </label>
        <label>
          Number of Stories:
          <input
            type="text"
            name="stories"
            defaultValue={house.number_of_stories}
          />
        </label>
        <label>
          Does is have a Basement:
          <input
            type="checkbox"
            name="basement"
            defaultValue={house.basement}
          />
        </label>
        <button type="submit">Update</button>
      </form>
      <AddImage houseid={props.match.params.id} />
      <button
        className="delete-button"
        type="submit"
        onClick={() => handleDelete()}
      >
        Delete
      </button>
      <button onClick={() => console.log(props.auth.user.username, house.user)}>
        HHHH
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(EditHouseView);
