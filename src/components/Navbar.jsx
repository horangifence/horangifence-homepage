import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="container nav-container">
      <Link to="/" className="logo">호랭이 휀스</Link>
      <ul className="nav-links">
        <li><Link to="/portfolio">시공 사례</Link></li>
        <li><Link to="/estimate">견적 문의</Link></li>
              <li><Link to="/blog">블로그</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;