import React from "react";
import SearchBar from "./searchbar";
import "./styles.css";
import { Link } from "react-router-dom";

export default () =>
  <div>
    <SearchBar />
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-ride="carousel">
      <div className="blur carousel-inner" role="listbox">
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
