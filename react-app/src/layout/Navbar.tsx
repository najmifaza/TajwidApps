import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
  };

  return (
    <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
      <Link to="/" className="logo d-flex align-items-center me-auto me-xl-0">
        <img src="/assets/img/logo.png" alt="" />
        <h1 className="sitename"></h1>
      </Link>

      <nav
        id="navmenu"
        className={`navmenu ${mobileNavActive ? "mobile-nav-active" : ""}`}
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMobileNav}
            >
              Home
            </NavLink>
          </li>
          <li>
            <a href="#kurikulum" onClick={closeMobileNav}>
              Kurikulum
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={closeMobileNav}>
              Testimonials
            </a>
          </li>
          <li className="dropdown">
            <Link to="/materi">
              <span>Materi</span>{" "}
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </Link>
            <ul>
              <li>
                <Link
                  to="/materi/hukum-nun-sukun-dan-tanwin"
                  onClick={closeMobileNav}
                >
                  Hukum Nun Sukun Dan Tanwin
                </Link>
              </li>
              <li>
                <Link to="/materi/hukum-mim-sukun" onClick={closeMobileNav}>
                  Hukum Mim Sukun
                </Link>
              </li>
              {/* Add more links as needed */}
            </ul>
          </li>
          <li>
            <a href="#contact" onClick={closeMobileNav}>
              Contact
            </a>
          </li>
        </ul>
        <i
          className="mobile-nav-toggle d-xl-none bi bi-list"
          onClick={toggleMobileNav}
        ></i>
      </nav>

      <Link className="btn-getstarted" to="/materi">
        <i className="bi bi-play-fill"></i>
        Mulai Belajar
      </Link>
    </div>
  );
};

export default Navbar;
