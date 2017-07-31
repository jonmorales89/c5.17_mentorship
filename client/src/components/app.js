import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "./home";
import Search from "./search";

const App = () =>
	<div>
		<Route exact path="/" component={Home} />
		<Route path="/results" component={Search} />
	</div>;

export default App;
