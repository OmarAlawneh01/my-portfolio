import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    <section className="main">
      <h1>Hey there 👋 I'm Omar Alawneh</h1>
      <h2>a Full-Stack Web Developer</h2>
      <h3>
        I enjoy building everything from dynamic frontends to powerful backends.
      </h3>

      <a href="#project" className="main-btn">
        Take a look
      </a>

      <div className="social-icons">
        <h4>My social media</h4>
        <a href="https://github.com/omaralawneh01" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/omar-alawneh-1a532124b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/omar_alawneh01/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/omar.alawneh.549"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </section>
  );
}

export default Home;
