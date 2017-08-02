import React from 'react';
import Example from './searchbar';
import './styles.css';

export default () =>
  <div>
    {/*<form id="homeSearch" className="form-inline my-2 my-lg-0">*/}
      {/*<input*/}
        {/*className="form-control mr-sm-2"*/}
        {/*type="text"*/}
        {/*placeholder="Search"*/}
      {/*/>*/}
      {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">*/}
        {/*Search*/}
      {/*</button>*/}
    {/*</form>*/}
    <Example />
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img
            className="d-block2 img-fluid"
            src="./dansu1.jpg"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block2 img-fluid"
            src="./dansu2.jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block2 img-fluid"
            src="./dansu3.jpg"
            alt="Third slide"
          />
        </div>
      </div>
    </div>
  </div>;
