import React from 'react';
import './app.css';
import Navbar from './navbar';
import Footer from './footer';
import Banner from './home_banner';
import FloatingActionButtonExampleSimple from './FloatingActionButtonExampleSimple';

const Home = () => {
	return (
		<div>
			<Navbar />
			<FloatingActionButtonExampleSimple />
			<Banner />
			<Footer />
		</div>
	);
};

export default Home;
