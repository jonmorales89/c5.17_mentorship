import React from "react";
import "./app.css";

import Navbar from "./navbar";
import Footer from "./footer";
import Banner from "./home_banner";

const Home = () => {
	return (
		<div>
			<Navbar />
		  <Banner />
			<Footer />
		</div>
	);
};

export default Home;
