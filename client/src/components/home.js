import React from 'react';
import './app.css';
import Navbar from './navbar';
import Footer from './footer';
import Banner from './home_banner';
import Form from './contact_mentor.js';

const Home = () => {
	return (
		<div>
			<Form />
			<Navbar />
			<Banner />
			<Footer />
		</div>
	);
};

export default Home;
