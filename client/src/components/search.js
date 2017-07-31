import React, { Component } from 'react';
import { db } from '../firebase/index';
import { connect } from 'react-redux';
import { getMentors } from '../actions/index';
import Navbar from './navbar';
import Footer from './footer';

class Search extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		db.ref('Mentors').on('value', snapshot => {
			var data = snapshot.val();
			this.props.getMentors(data);
		});
	}

	displayMentee(id) {
		console.log('id data', id);
		return (
			<li>
				<div>
					Name: {id.name}
				</div>
				<div>
					Bio:
					<div>About Me: </div>
					<div>Style: </div>
					<div>Experience: </div>
					<div>Location: </div>
					<div>Affiliates: </div>
					<div>Awards: </div>
				</div>
				<div>Mentee:</div>
			</li>
		);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<Navbar />
				<ul>
					<li>List of Mentors</li>
					<li />
				</ul>
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		mentors: state.list
	};
}

export default connect(mapStateToProps, { getMentors })(Search);
