import React,{useState,useEffect} from "react";

function Navbar() {

  

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
  
  return (
 <header className="header">
      <a href="#" className="logo">OMAR</a>
      <nav className="navgation">
        <a href="#services">Services</a>
        <a href="#project">Projects</a>
        <a href="#content">Contact</a>
        <a
          href="https://docs.google.com/document/d/11YUUf3KDXD3HevVijZSrK_AXP5m4P5P5fKeii5bT40o/edit?usp=sharing"
          download
        >
          my cv
        </a>
         <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
    </header>
  );
}
export default Navbar;
