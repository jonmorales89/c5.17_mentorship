import React from 'react';
import { Route, Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
			<button
				className="navbar-toggler navbar-toggler-right"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<Link className="navbar-brand" to="/">
				DansuMentors
			</Link>

			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/">
							Home <span className="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/results">
							Find a Mentor
						</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">
							Find by Location
						</a>
					</li>
					<li className="nav-item" />
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<Link className="form-control mr-sm-2" to="/login">
						Login
					</Link>
					<Link className="form-control mr-sm-2" to="/signup">
						Sign Up
					</Link>
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
