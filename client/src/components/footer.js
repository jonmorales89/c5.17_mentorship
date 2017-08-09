import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css';
import './css/bootstrap-social.css';

export default () =>
  <div>
    <footer className="footer mdl-bgcolor--primary-dark">
      <div className="container-fluid">
        <div className="row">
            <div className="a col-md-6">
              <h3 className="underline">DansuMentors</h3>
                <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci architecto, culpa deleniti doloremque doloribus eligendi fugit illo ipsum iusto, maxime minima, neque porro sunt tenetur totam velit vero! Animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aspernatur autem eius harum nisi placeat repellendus sed sint temporibus ullam voluptatibus. Dicta dolore labore minima optio provident qui, totam. Modi, odio.
                    </p>
                </div>
          </div>

          <div className="a col-md-3">
              <h4 className="underline">Get to know us</h4>
              <div>
                  <p>About us</p>
                  <p>Address</p>
                  <p>Contacts</p>
                  <p>Q&A</p>
              </div>
          </div>

          <div className="a col-md-3">
              <h4 className="underline">Connect with us</h4>
              <div className="icon">
                  <Link className="btn btn-social-icon btn-facebook mr-3" to="/">
                      <span className="fa fa-facebook"></span>
                  </Link>
                  <Link className="btn btn-social-icon btn-twitter mr-3" to="/">
                      <span className="fa fa-twitter"></span>
                  </Link>
                  <Link className="btn btn-social-icon btn-google" to="/">
                      <span className="fa fa-google"></span>
                  </Link>
              </div>
          </div>
        </div>
          <br/>

          <br/>
          <hr/>
        <div className="row-fluid col-sm-12">
          <p>Copyright © 2017 Dansu <span className="division">Mentors | All</span> Rights Reserved</p>
        </div>
      </div>
    </footer>
  </div>
