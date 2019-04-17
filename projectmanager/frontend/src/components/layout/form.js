import React from "react";

const ContactForm = props => {
  const defaultMsg = `Hi im intreseting in ${
    props.address
  }. Please call me so I can learn more`;
  return (
    <div className="contact-form">
      <input type="text" placeholder="Fullname" />
      <br />
      <input type="text" placeholder="Email Adress" />
      <br />

      <input type="text" placeholder="Phone Number" />
      <br />

      <textarea rows="6" value={defaultMsg} />
    </div>
  );
};

export default ContactForm;
