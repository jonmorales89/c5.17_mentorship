import React from 'react';
import './app.css';


import logo from './imgs/logo.svg';
import Navbar from './navbar';
import Footer from './footer';

const App = () => (
    <div>
    		<Navbar />
        <div className="app">
            <img src={logo} className="rotate"/>
            <h1>Welcome to React!</h1>
        </div>
        <Footer />
    </div>
);

export default App;
