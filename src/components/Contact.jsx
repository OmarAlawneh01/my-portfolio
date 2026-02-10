import React from "react";
import { FaPhone,FaEnvelope } from 'react-icons/fa';

function Contact(){
return (
    <section className="cards-cont" id="content">
      <h2 className="title">Let's Work Together</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <i>
              <FaEnvelope />
              
            </i>
          </div>
          <div className="info">
            <h3>Email</h3>
            <a href="https://mail.google.com/">
              <p>Omaralawneh01@gmail.com</p>
            </a>
          </div>
        </div>

        <div className="card">
          <div className="icon">
            <i>
             <FaPhone/>
            </i>
          </div>
          <div className="info">
            <h3>Phone Number</h3>
            <p>+962 792545136</p>
          </div>
        </div>
      </div>
    </section>
  );

}
export default Contact;

