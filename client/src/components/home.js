import React from 'react';
import './app.css';

import NavbarHome from './navbarHome';
import Footer from './footer';
import Banner from './home_banner';

const Home = () => {
	return (
		<div>
			<NavbarHome />
			<Banner />
			<Footer />
		</div>
	);
};

export default Home;

