import React from 'react';
import './app.css';
<<<<<<< HEAD


import NavbarHome from './navbarHome';
=======
import Navbar from './navbar';
>>>>>>> a7150cbbdbfe13ab2e5592f06b0f1c84077c3864
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
