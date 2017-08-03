import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './home';
import Search from './search_list_item';
import Login from './login';
import Add from './tempAdd';
import MentorsSignUp from './mentor_signup_form';

const App = () =>
	<div>
		<Route path="/mentors/signup" component={MentorsSignUp} />
		<Route path="/add" component={Add} />
		<Route path="/login" component={Login} />
		<Route path="/results" component={Search} />
		<Route exact path="/" component={Home} />
	</div>;

export default App;
