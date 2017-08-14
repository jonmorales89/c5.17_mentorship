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
                        <h1>Live 1:1 Q&A from industry and community dancers</h1>
                        <h5>DansuMentors is your live 1:1 expert dance mentor helping you in real time</h5>
                        <SearchBar className="inputSearch" />
                    </div>
				</div>
			</div>
		</div>
	);
};