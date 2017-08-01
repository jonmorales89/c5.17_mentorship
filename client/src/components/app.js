import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './home';
import Search from "./search_list_item";
import Login from './login';
import DashBoard from './dashboard.js';

const App = () =>
	<div>
		<Switch>
			<Route path="/login" component={Login} />
      <Route path="/results" component={Search} />
		  <Route path="/dashboard" component={DashBoard} />
			<Route path="/" component={Home} />
		</Switch>
	</div>;

export default App;
