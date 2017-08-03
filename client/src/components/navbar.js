import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbarStyle.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse font">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
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
					<li className="nav-item">
						<Link className="nav-link" to="/login">
							Login
						</Link>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input
						className="form-control mr-sm-2"
						type="text"
						placeholder="Search"
					/>
					<button
						className="btn btn-outline-success my-2 my-sm-0"
						type="submit">
						Search
					</button>
				</form>
			</div>
		</nav>
	);
export default Navbar;
