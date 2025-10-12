import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub , FaInstagram ,FaXTwitter  } from 'react-icons/fa';
  


function home() {
   return (
    <>
     <section className="main">
      <h2>
        hi I'm 'Omar'
        <br />
        <span>Web Developer {"{Front End}"}</span>
        <br />
        <span>
          <h3>Whether you're a business owner needing a landing page,<br />
             a startup looking for a clean web app UI,<br />
              or a team needing a developer to bring your frontend vision to life <br />
              I can help.</h3>
        </span>
        <span>
          <a href="#project" className="main-btn">
            take a look
          </a>
          <div className="social-icons">
            <h5>my social media</h5>
            <a href="https://github.com/omaralawneh01">
              <i><FaGithub/></i>
            </a>
            <a href="https://www.linkedin.com/in/omar-alawneh-1a532124b/">
              <i><FaLinkedin/></i>
            </a>
            <a href="https://www.instagram.com/omar_alawneh01/">
              <i><FaInstagram/></i>
            </a>
            <a href="https://www.facebook.com/omar.alawneh.549">
              <i><FaFacebook/></i>
            </a>
          </div>
        </span>
      </h2>
    </section>
     </>
   
  );
}
export default home;