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
		db.ref('mentors').on('value', snapshot => {
			const data = snapshot.val();
			console.log(this.props.getMentors(data));
			this.props.getMentors(data);
		});
	}

	displayMentee(mentors) {
		console.log('mentors data', mentors);

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
		const { mentors } = this.props;

		if(!mentors){
			return <h1>Loading...</h1>;
		}

		const list = this.displayMentee(mentors);
		return (
			<div>
				{list}
			</div>
				
		);
	}
}

function mapStateToProps(state) {
	return {
		mentors: state.list.mentors
	};
}

export default connect(mapStateToProps, { getMentors })(Search);
