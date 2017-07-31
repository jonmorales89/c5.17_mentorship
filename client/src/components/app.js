import React from "react";
import Home from "./home";
import { Route, Link } from "react-router-dom";
import DashBoard from './dashboard.js';

const App = () =>
	<div>
		<Route exact path="/" component={Home} />
		<Route exact path="/dashboard" component={DashBoard} />
	</div>;

export default App;
