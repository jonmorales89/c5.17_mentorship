import React from 'react';
import './app.css';


import NavbarHome from './navbarHome';
import Footer from './footer';
import Banner from './home_banner';
import Profile from './profile_card'

const Home = () => {
	return (
		<div>
			<NavbarHome />
			<Banner />
			<Profile />
			<Footer />
		</div>
	);
};

export default Home;

