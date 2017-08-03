import React from 'react';
import firebase from 'firebase';
import { provider, auth } from '../firebase';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './home';
import Search from './search_list_item';
import Login from './login';
import Add from './tempAdd';
import MentorsSignUp from './mentor_signup_form';
import FBLogin from './facebook_login';

const App = () =>
	<div>
		<Route path="/login/facebook" component={FBLogin} />
		<Route path="/mentors/signup" component={MentorsSignUp} />
		<Route path="/add" component={Add} />
		<Route exact path="/login" component={Login} />
		<Route path="/results" component={Search} />
		<Route exact path="/" component={Home} />
	</div>;

export default App;
