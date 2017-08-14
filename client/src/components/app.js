import React from 'react';
import firebase from 'firebase';
import './app.css';
import { provider, auth } from '../firebase';
import { Route } from 'react-router-dom';
import AuthUser from '../hoc/auth_user';
import Navbar from './navbar';
import Footer from './footer';
import Home from './home';
import Search from './search_list';
import Login from './authentication/login';
import MentorsSignUp from './authentication/mentor_signup_form';
import MentorsRegister from './authentication/register';
import Dashboard from './protected/mentor_dashboard';
import ContactForm from './contact_modal.js';

const App = () => {
	return (
		<div>
			<Navbar />
			<Route path="/mentors/dashboard" component={AuthUser(Dashboard)} />
			<Route path="/mentors/register" component={MentorsRegister} />
			<Route path="/mentors/signup" component={MentorsSignUp} />
			<Route path="/mentors/login" component={Login} />
			<Route path="/results" component={Search} />
			<Route exact path="/" component={Home} />
			<Route exact path="/contact" component={ContactForm} />
			<Footer />
		</div>
	);
};

export default App;
