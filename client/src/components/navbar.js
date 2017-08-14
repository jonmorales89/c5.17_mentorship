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
                      className="btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-bgcolor--secondary-light text-white"
                      onClick={() => props.logout()}>
                    Logout
                  </button>
                </li>
            );
        }
        return [
          <li key="1" className="nav-item">
            <Link
                className="nav-link login mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--secondary-light mr-3 text-white text-center"
                to="/mentors/login">
              Login
            </Link>
          </li>,
          <li key="2" className="nav-item">
            <Link
                className="nav-link register mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--primary-light text-white text-center"
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/results">
                  Find a Mentor
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                    className="nav-link dropdown-toggle text-white"
                    to="/">
                  Styles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Become a DansuMentor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  How It Works
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