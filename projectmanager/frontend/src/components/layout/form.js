import React from "react";

const ContactForm = props => {
  const defaultMsg = `Hi im intreseting in ${
    props.address
  }. Please call me so I can learn more`;
  let form = (
    <div className="overlay">
      <div className="contact-form">
        <button onClick={props.onClose}>X</button>
        <input type="text" placeholder="Fullname" />

        <input type="text" placeholder="Email Adress" />

        <input type="text" placeholder="Phone Number" />

        <textarea rows="6" value={defaultMsg} />
      </div>
    </div>
  );

  if (!props.isOpen) {
    form = null;
  }
  return <div>{form}</div>;
};

export default ContactForm;
