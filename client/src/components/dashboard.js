import React from 'react';
import Navbar from './navbar';
import MenteeList from './mentee_list.js';
import SideBar from './mentee_sidebar.js';

const DashBoard = () => {
	return (
		<div>
			<Navbar />
			<MenteeList />
			<SideBar />
		</div>
	);
};

export default DashBoard;
