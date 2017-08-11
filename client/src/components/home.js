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






		{/*<div className="homeBanner">*/}
			{/*<img*/}
				{/*src="./dansu1.png"*/}
				{/*alt="banner picture"*/}
				{/*className="img-responsive homePhoto"*/}
			{/*/>*/}
			{/*<div className="text-center mx-5">*/}
				{/*<h4>Live 1:1 Q&A from industry and community dancers</h4>*/}
				{/*<h5>*/}
					{/*Dansumentor is your live 1:1 expert dance mentor helping you in real*/}
					{/*time*/}
				{/*</h5>*/}
			{/*</div>*/}
			{/*<SearchBar className="text-center" InputClassName="" />*/}
		{/*</div>*/}