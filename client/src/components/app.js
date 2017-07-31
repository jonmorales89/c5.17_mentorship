import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './home';
import Search from "./search";
import Login from './login';

const App = () =>
	<div>
		<Switch>
			<Route path="/login" component={Login} />
      <Route path="/results" component={Search} />
			<Route path="/" component={Home} />
		</Switch>
	</div>;

export default App;
