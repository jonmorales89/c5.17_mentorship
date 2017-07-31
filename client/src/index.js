import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import rootReducer from "./reducers/index";

import App from "./components/app";

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
