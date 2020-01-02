import React from "react";

function Contact(props) {
  console.log(props);
  return (
    <div className="contact">
      <img src={props.imgURL} alt={props.alt} />
      <h4>{props.name}</h4>
      <p>Contact#: {props.Contact}</p>
      <p>email: {props.email}</p>
    </div>
  );
}

export default Contact;
