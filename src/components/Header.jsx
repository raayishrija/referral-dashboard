import React, { useState } from "react";
import "./Header.css";

const MenuIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
    <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
    <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
    <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const BellIcon = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
    <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navLinks = ["Home", "About Us", "Courses", "Projects", "Contact"];

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <div className="header-logo">
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <polygon points="12,2 22,20 2,20" fill="white" />
            </svg>
          </div>
          <span className="logo-text">NxtWave</span>
        </div>

        {/* Nav links */}
        <nav className={`header-nav${mobileMenuOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link} href="#" className="nav-link">
              {link}
            </a>
          ))}
          <a href="#" className="nav-cta mobile-cta">Try for free</a>
        </nav>

        {/* Right side */}
        <div className="header-right">
          <div className="search-bar">
            <span className="search-icon"><SearchIcon /></span>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
          </div>

          <button className="icon-btn bell-btn">
            <BellIcon />
            <span className="badge">3</span>
          </button>

          <a href="#" className="nav-cta desktop-cta">Try for free</a>

          <div className="user-avatar-wrap">
            <div className="user-avatar">SR</div>
            <div className="user-info">
              <span className="user-name">Shrija</span>
            </div>
          </div>

          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
