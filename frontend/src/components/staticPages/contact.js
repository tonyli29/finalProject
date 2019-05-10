import React from "react";

const Contact = () => {
  return (
    <div className="about">
      <h1>Contact</h1>
      <ul>
        <li className="contact-link">
          <a href="https://github.com/tonyli29" target="_blank">
            <button>Github</button>
          </a>
        </li>
        <li className="contact-link">
          <a
            href="https://www.linkedin.com/in/tony-li-2b9745165/"
            target="_blank"
          >
            <button>LinkedIn</button>
          </a>
        </li>
        <li>Email: tonyli.0923@gmail.com</li>
      </ul>
    </div>
  );
};

export default Contact;
