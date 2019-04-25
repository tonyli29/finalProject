import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../../actions/auth";
const Register = props => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  const onSubmit = e => {
    e.preventDefault();
    // if (
    //   e.target.elements.password.value !== e.target.elements.password2.value
    // ) {
    //   alert("Passwords dont match");
    // } else {
    //   const newUser = {
    //     username: e.target.elements.username.value,
    //     email: e.target.elements.email.value,
    //     password: e.target.elements.password.value
    //   };
    //   console.log(newUser);
    //   axios
    //     .post(`http://localhost:8000/api/auth/register`, newUser)
    //     .then(res => {
    //       console.log(res.data.token);
    //     });
    // }
    if (
      e.target.elements.password.value !== e.target.elements.password2.value
    ) {
      alert("Passwords dont match");
    } else {
      props.register(
        e.target.elements.username.value,
        e.target.elements.password.value,
        e.target.elements.email.value
      );
    }
  };

  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="account-form">
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="password2" />
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
