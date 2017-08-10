import React from 'react';
import SearchBar from './searchbar';
import './css/landingPage.css';

export default () => {
	return (
		<div className="homeBanner">
			<img
				src="./dansu1.png"
				alt="banner picture"
				className="img-responsive homePhoto"
			/>
			<div className="text-center mx-5">
				<h4>Live 1:1 Q&A from industry and community dancers</h4>
				<h5>
					Dansumentor is your live 1:1 expert dance mentor helping you in real
					time
				</h5>
			</div>
			<SearchBar className="text-center" />
		</div>
	);
};
