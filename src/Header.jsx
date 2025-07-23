import React,{useState,useEffect, use} from "react";

function Header() {

  

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
          href="https://drive.google.com/file/d/1Hihbcp3evFED3yuZOhcNeFOnLSi--XbP/view?usp=drive_link"
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
export default Header;

