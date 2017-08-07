import React from 'react';
import './app.css';


import Navbar from './navbar';
import Footer from './footer';
import Banner from './home_banner';
import Profile from './profile_card'

const Home = () => {
	return (
		<div>
			<Navbar />
			<Banner />
			<Profile />
			<Footer />
		</div>
	);
};

export default Home;
