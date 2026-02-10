import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

function Services(){
  return (
    <section className="cards-cont" id="services">
      <h2 className="titel">services</h2>
      <div className="content">
        <div className="card">
          <div className="icon">
            <FaCode size={50} />
          </div>
          <div className="info">
            <h3>Web Development</h3>
            <p>I can build responsive and modern web applications using the latest technologies.</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <FaPaintBrush size={50} />
          </div>
          <div className="info">
            <h3>UI/UX Design</h3>
            <p>I design intuitive and visually appealing interfaces for users.</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <FaMobileAlt size={50} />
          </div>
          <div className="info">
            <h3>Responsive Design</h3>
            <p>Your website will look great on all devices, from desktop to mobile.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

