import React from 'react';
import firebase from 'firebase';
import { provider, auth } from '../firebase';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './home';
import Search from './search_list_item';
import Login from './login';
import Add from './tempAdd';
<<<<<<< HEAD
import MentorsSignUp from './mentor_signup_form';

const App = () =>
	<div>
		<Route path="/mentors/signup" component={MentorsSignUp} />
		<Route path="/add" component={Add} />
		<Route path="/login" component={Login} />
		<Route path="/results" component={Search} />
		<Route exact path="/" component={Home} />
=======
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
>>>>>>> acb6651d8ca1ca340dd3f21ccc92fb42196ffed8
	</div>;

export default App;
