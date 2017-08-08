import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';
import './css/navbarStyle.css';

const Navbar = props => {
  function loginOptions() {
    if (props.auth) {
      return (
        <li className="nav-item">
          <button
            className="btn btn-outline-default"
            onClick={() => props.logout()}>
            Logout
          </button>
        </li>
      );
    }
    return [
      <li key="1" className="nav-item">
        <Link className="nav-link" to="/mentors/login">
          Login
        </Link>
      </li>,
      <li key="2" className="nav-item">
        <Link className="nav-link" to="/mentors/signup">
          Register
        </Link>
      </li>
    ];
  }

  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse font">
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
      <Link className="navbar-brand" to="/">
        DansuMentors
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/results">
              Find a Mentor
            </Link>
          </li>
        </ul>
        <form className="form-inline my-lg-0">
          <ul className="navbar-nav mr-auto">
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
