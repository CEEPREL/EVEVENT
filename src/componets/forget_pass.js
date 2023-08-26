import React from "react";
import "./forgetpass.css";

function Forget_pass({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="container1">
        <h1>Reset Passord</h1>
        <h2>
          Enter your email address that you used to register. <br /> We'll email you with a link to reset your password.
        </h2>
        <input placeholder="Enter Email"></input>
        <p className="closebtn" onClick={onClose}>
          X
        </p>
        <button>Send Link</button>
      </div>
    </div>
  );
}

export default Forget_pass;
