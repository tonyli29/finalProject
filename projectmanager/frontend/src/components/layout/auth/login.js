import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../../actions/auth";

const Login = props => {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  // static propTypes = {
  //   login: PropTypes.func.isRequired,
  //   isAuthenticated: PropTypes.bool
  // }

  Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  const onSubmit = e => {
    e.preventDefault();
    props.login(
      e.target.elements.username.value,
      e.target.elements.password.value
    );
  };

  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="account-form">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
        <p>
          Dont have an account? <Link to="/register">Register</Link>
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
  { login }
)(Login);
