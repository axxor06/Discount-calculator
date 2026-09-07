import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand bg-white border-bottom">
      <div className="container">

        <Link
          to="/"
          className="navbar-brand fw-bold text-dark"
        >
          Discount Calculator
        </Link>

        <div className="navbar-nav ms-auto">

          <Link
            to="/"
            className="nav-link px-3 text-dark"
          >
            Home
          </Link>

          <Link
            to="/calculator"
            className="nav-link px-3 text-dark"
          >
            Calculator
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Header;
