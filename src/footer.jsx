import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
function footer() {
    return (
    <footer className="fotter">
      <p>
        Copyrights @ <span>omar-alawneh-1a532124b</span>
      </p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/omar-alawneh-1a532124b/">
          <i><FaLinkedin/></i>
        </a>
        <a href="https://www.instagram.com/omar_alawneh01/">
          <i ><FaInstagram/></i>
        </a>
        <a href="https://www.facebook.com/omar.alawneh.549">
          <i><FaFacebook/></i>
        </a>
        <a href="https://twitter.com/omaralawneh01">
          <i ><FaTwitter/></i>
        </a>
        <a href="https://github.com/omaralawneh01">
          <i ><FaGithub/></i>
        </a>
      </div>
    </footer>
  );
};
export default footer;