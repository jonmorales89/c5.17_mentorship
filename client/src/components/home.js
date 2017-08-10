import React from 'react';
import SearchBar from './searchbar';
import './css/bannerStyle.css';

export default () => {
	return (
		<div className="body">
			<SearchBar />
			<img src="./dansu1.jpg" alt="banner picture"/>
		</div>
	);
};
