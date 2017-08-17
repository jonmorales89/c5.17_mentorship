import React from "react";
import { Link } from "react-router-dom";
import "./css/bootstrap-social.css";
import "./css/footer.css";

export default () =>
  <div>
    <footer className="footer mdl-bgcolor--primary-dark">
      <div className="container-fluid">
        <div className="row">
          <div className="a col-md-6">
            <h3 className="underline">DansuMentors</h3>
            <div>
              <p>
                We dance.
              </p>
            </div>
          </div>
          <div className="a col-md-3">
            <h4 className="underline">Get to know us</h4>
            <div>
              <p>About us</p>
              <p>Contacts</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="a col-md-3">
            <h4 className="underline">Connect with us</h4>
            <div className="icon">
              <a href="https://facebook.com/" className="btn btn-social-icon btn-facebook mr-3" >
                <span className="fa fa-facebook" />
              </a>
              <a href="https://twitter.com/"className="btn btn-social-icon btn-twitter mr-3" >
                <span className="fa fa-twitter" />
              </a>
              <a href="https://accounts.google.com/SignUp?hl=en" className="btn btn-social-icon btn-google" >
                <span className="fa fa-google" />
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <div className="copyRight row-fluid col-sm-12">
          <p>
            Copyright © 2017 Dansu
            <span className="division">Mentors | All</span> Rights Reserved
            <br/>
            <br/>
          </p>
        </div>
      </div>
    </footer>
  </div>;
