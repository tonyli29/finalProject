import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import SearchCopy from "../searchCopy";
const NavBar = props => {
  NavBar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  const authLinks = (
    <ul className="nav-bar-auth">
      <li className="nav-auth-item">
        <Link onClick={props.logout} className="auth-button">
          Logout
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="nav-bar-auth">
      <li className="nav-auth-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li className="nav-auth-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </ul>
  );

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

  const getResult = e => {
    const houseValue = e.target.elements.neighbourhood.value.toLowerCase();
    e.preventDefault();
    console.log(titleCase(houseValue));
    window.location = `http://localhost:8000/#/neighbourhood/${houseValue}`;
  };

  return (
    <div className="nav-bar">
      <header>
        <div className="top-row">
          <h1>
            <a href="/">House.Com</a>
          </h1>
          <SearchCopy getResult={getResult} />
          <h1 className="navbar-text">
            {props.auth.user ? `${props.auth.user.username}` : ""}
          </h1>
        </div>
      </header>
      <ul className="navbar-list">
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/edit">Edit</Link>
        </li>
        {props.auth.isAuthenticated ? authLinks : guestLinks}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(NavBar);
