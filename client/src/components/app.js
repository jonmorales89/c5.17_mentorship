import React from 'react';
import './app.css';
import logo from './imgs/logo.svg';
import Navbar from './navbar.js';

const App = () => (
    <div>
    		<Navbar />
        <div className="app">
            <img src={logo} className="rotate"/>
            <h1>Welcome to React!</h1>
        </div>
    </div>
);

export default App;
