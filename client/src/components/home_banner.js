import React from 'react';
import './styles.css';

export default() => (
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
        <img className="d-block img-fluid" src="./dansu1.jpg" alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block img-fluid" src="./dansu2.jpg" alt="Second slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block img-fluid" src="./dansu3.jpg" alt="Third slide" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
)
