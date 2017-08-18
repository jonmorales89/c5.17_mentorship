import React from 'react';
import SearchBar from './searchbar';
import './css/landingPage.css';

export default () => {
  return (
    <div className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="item active">
          <img src="./dansu1.png" alt="banner picture" />
          <div className="carousel-caption test">
            <p className="title">Community Dance Instructors</p>
            <p className="sub">DansuMentors are your expert dance mentors helping you achieve your goals</p>
            <SearchBar className="inputSearch" />
          </div>
        </div>
      </div>
    </div>
  );
};
