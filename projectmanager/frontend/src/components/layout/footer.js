import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="info-box">
        <h1>Created with</h1>
        <p>
          React js as the front end and Django Rest framework on the backend.
          For authentication I used token authentication and redux to manage
          everything.{" "}
        </p>
        <br />
        <br />
        <br />
        <p>Made by Tony Li</p>
      </div>
      <div className="info-box">
        <h1>Languages</h1>
        <ul>
          <li>React</li>
          <li>Django</li>
          <li>Redux</li>
          <li>Javascript</li>
          <li>Python</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
