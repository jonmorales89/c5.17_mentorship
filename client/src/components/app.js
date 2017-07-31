import React from "react";
import Home from "./home";
import { Route, Link } from "react-router-dom";

const App = () =>
	<div>
		<Route path="/" component={Home} />
	</div>;

export default App;
