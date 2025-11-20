import React, { useState } from "react";
import InfoButton from "../Buttons/Info/Info";
import "./Navbar.scss";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const handleAbout = () => {
    const section = document.querySelector(".home-next-section");
    if (!section) return;

    const offset = -157
    ; 

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    setIsMenuOpen(false);
  };

  const handlePortfolio = () => {
    window.open("https://placeholder.com", "_blank");
    setIsMenuOpen(false);
  };

  const handleContact = () => {
    const openModalEvent = new CustomEvent("open-contact-modal");
    window.dispatchEvent(openModalEvent);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <InfoButton label="About Me" onClick={handleAbout} />
          <InfoButton label="Portfolio" onClick={handlePortfolio} />
          <InfoButton label="Contact" onClick={handleContact} />
        </div>
        <button
          className="navbar-menu-btn"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <InfoButton label="About Me" onClick={handleAbout} />
          <InfoButton label="Portfolio" onClick={handlePortfolio} />
          <InfoButton label="Contact" onClick={handleContact} />
        </div>
      )}
    </nav>
  );
}
