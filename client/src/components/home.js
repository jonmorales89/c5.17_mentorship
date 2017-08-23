import React from 'react';
import SearchBar from './searchbar';
import './css/landing_page.css';

export default () => {
  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="item active">
          <img src="./dansu1.png" alt="banner picture" />
          <div className="carousel-caption test">
            <p className="title">Be a part of your dance community. Find a mentor near you.</p>
            <p className="sub">Connect. Learn. Thrive.</p>
            <SearchBar className="inputSearch" />
          </div>
        </div>
      </div>
    </div>
  );
};
