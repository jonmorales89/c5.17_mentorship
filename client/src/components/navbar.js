import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions";
import "./css/navbar.css";

const Navbar = props => {
  function loginOptions() {
    if (props.auth) {
      return (
        <li className="nav-item">
          <button
            className="btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-bgcolor--secondary-light"
            onClick={() => props.logout()}>
            Logout
          </button>
        </li>
      );
    }
    return [
      <li key="1" className="nav-item">
        <Link
          className="nav-link login button-fix mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--secondary-light mr-3 text-center"
          to="/mentors/login">
          Login
        </Link>
      </li>,
      <li key="2" className="nav-item">
        <Link
          className="nav-link button-fix register mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--primary-light text-center"
          to="/mentors/signup">
          Register
        </Link>
      </li>
    ];
  }

  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse font mdl-bgcolor--primary-dark">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand logo" to="/">
        DansuMentors
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto menu_links">
          <li className="nav-item">
            <Link className="nav-link" to="/results">
              Find a Mentor
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mentors/signup">
              Become a DansuMentor
            </Link>
          </li>
        </ul>
        <form className="form-inline my-lg-0">
          <ul className="navbar-nav">
            {loginOptions()}
          </ul>
        </form>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth.authorized
  };
}

export default connect(mapStateToProps, { logout })(Navbar);
