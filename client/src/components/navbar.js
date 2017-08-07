import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbarStyle.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-toggleable-md font">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="/">
          DansuMentors
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link btn btn-outline-info mr-4" to="/results">
              Find a Mentor
            </Link>
          </li>
            <li className="nav-item dropdown">
                <Link className="nav-link btn btn-outline-info mr-4 dropdown-toggle" to="/results">
                    Styles
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn btn-outline-info mr-4" to="/results">
                    Community
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn btn-outline-info mr-4" to="/results">
                    Become a DansuMentor
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link btn btn-outline-info" to="/results">
                    How It Works
                </Link>
            </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link btn btn-lg btn-primary mr-4" to="/mentors/signup">
                Sign Up
              </Link>
            </li>
              <li className="nav-item">
                  <Link className="nav-link btn btn btn-lg btn-danger" to="/">
                      Log In
                  </Link>
              </li>
          </ul>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
