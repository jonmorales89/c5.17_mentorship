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
  </div>
)
