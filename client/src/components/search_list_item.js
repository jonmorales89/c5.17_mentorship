import React, { Component } from 'react';
import { db } from '../firebase/index';
import { connect } from 'react-redux';
import { getAllMentors } from '../actions/index';

class Search2 extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// this.props.getAllMentors();
		console.log('mounting');
		this.props.getAllMentors();
	}

	displayMentors(mentors) {
		const { bio, mentees, name } = mentors.id;

		// return <h1>Hello</h1>;
		return (
			<li>
				<div>
					Name: {name}
				</div>
				<div>
					Bio:
					<div>About Me: {bio.aboutme} </div>
					<div>Style: {bio.style} </div>
					<div>Experience: {bio.experience} </div>
					<div>Location: {bio.location} </div>
					<div>Affiliates: {bio.affiliates} </div>
					<div>Awards: {bio.awards} </div>
				</div>
				<div>Mentee:</div>
			</li>
		);
	}

	render() {
		return (
			<div>
				<h1>Testing</h1>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		mentors: state.mentors.allMentors
	};
}

export default connect(mapStateToProps, { getAllMentors })(Search2);
