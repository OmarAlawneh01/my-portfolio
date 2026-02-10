import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    <section className="main">
      <h2>Hey there 👋 I'm Omar Alawneh <br />
      <span>a Full-Stack Web Developer</span>
      <h3>
        Who enjoys building everything from dynamic frontends to powerful backends.
      </h3>
      </h2>
      <a href="#project" className="main-btn">
        Take a look
      </a>
      <div className="social-icons">
        <h4>My social media</h4>
        <a href="https://github.com/omaralawneh01"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/omar-alawneh-1a532124b/" ><FaLinkedin /></a>
        <a href="https://www.instagram.com/omar_alawneh01/"><FaInstagram /></a>
        <a href="https://www.facebook.com/omar.alawneh.549"><FaFacebook /></a>
      </div>
    </section>
  );
}

export default Home;

