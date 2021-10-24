import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header">
      <a className="navbar-brand" href="/">
        <i className="bi bi-journal-check"></i>
        Notes
      </a>
      <nav className="nav">
        <Link to="/login">
          <button className="btn btn-outline-primary ">Sign in/Sign up</button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
