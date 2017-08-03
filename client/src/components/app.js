import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './home';
import Search from "./search_list";
import Login from './login';
import Add from './tempAdd';

const App = () =>
	<div>
		<Switch>
			<Route path="/add" component={Add} />
			<Route path="/login" component={Login} />
      		<Route path="/results" component={Search} />
			<Route path="/" component={Home} />
		</Switch>
	</div>;

export default App;
