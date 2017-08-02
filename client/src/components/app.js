import React from 'react';
import firebase from 'firebase';
import { provider, auth } from '../firebase';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './home';
import Search from './search_list_item';
import Login from './login';
import DashBoard from './dashboard.js';
import Add from './tempAdd';
import MentorSignUp from './mentor_signup';

const App = () =>
	<div>
		<Switch>
			<Route path="/add" component={Add} />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={MentorSignUp} />
			<Route path="/results" component={Search} />
			<Route path="/dashboard" component={DashBoard} />
			<Route path="/" component={Home} />
		</Switch>
	</div>;

export default App;
