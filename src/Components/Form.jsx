import React from 'react';
import "../assets/Style/Form.scss";

export default function Form() {
  return (
    <div className="form-container">
        <div className="form-box">
            <div className="input-box">
                <label htmlFor="name">NAME</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="input-box">
                <label htmlFor="mail">EMAIL</label>
                <input type="text" name="mail" id="mail" />
            </div>
            <div className="input-box">
                <label htmlFor="message">TALK ABOUT YOU</label>
                <input type="text" name="message" id="message" />
            </div>
            <button type="submit">SEND</button>
        </div>
    </div>
  )
}
