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
            <p className="title">Live 1:1 Q&A from industry and community dancers</p>
            <p className="sub">DansuMentors is your live 1:1 expert dance mentor helping you in real time</p>
            <SearchBar className="inputSearch" />
          </div>
        </div>
      </div>
    </div>
  );
};
