import { useState } from "react";
import copy from "../data/copy.json";

const pages = ["plan", "meetings", "facebook", "ads", "charities"];

export default function Header({ activePage, onSelect }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (page) => {
    if (onSelect) onSelect(page);
    setMenuOpen(false);
  };

  return (
    <header className="brand-header">
      <div className="brand-header__inner">
        <div className="brand-header__brand">
          <img src={`${import.meta.env.BASE_URL}assets/logo.png`} alt={copy.logoAlt} />
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`top-nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          {pages.map((page) => (
            <button
              key={page}
              type="button"
              className={`nav-btn ${activePage === page ? "active" : ""}`}
              onClick={() => handleSelect(page)}
            >
              {copy.nav[page]}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
} 
