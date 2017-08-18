import React, { Component } from 'react';
import { db } from '../../firebase';
import axios from 'axios';
import Card from '../../components/card.js';
import '../css/card.css';


export default class SearchList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			showModal: false
		};
	}

	componentWillMount() {
		var uid = window.localStorage.getItem('token');
		console.log("UID:", uid);	
		db.ref(`Mentors/uid/${uid}/mentee/uid`).on('value', snapshot => {
			const menteeList = snapshot.val();
			var mentees = Object.values(menteeList).map(mentee => {
				db.ref(`Mentees/${mentee}`).on('value', snapshot => {
					var data = snapshot.val()
					console.log('data:', data);
					this.setState({ data: [ ...this.state.data,  data ]});
				})
			});
		}
	)};

	charLimit(value) {
		const mentorBio = value;
		for (let i = 0; i < mentorBio.length; i++) {
			if (mentorBio.length > 60) {
				let result = mentorBio.substring(0, 60);
				if (result.length - 1 !== ' ') {
					for (let j = result.length - 1; j >= 0; j--) {
						if (result[j] === ' ') {
							return result.substring(0, j) + ' ...';
						}
					}
				}
			} else {
				return mentorBio;
			}
		}
	}

	affiliateLimit(value) {
		const text = value;
		if (text.includes(',')) {
			const end = text.indexOf(',');
			return text.substring(0, end) + ' ...';
		} else {
			return text;
		}
	}

	cardClick() {
		this.setState({
			showModal: !this.state.showModal
		});
	}

	renderCards(data) {
		const list = Object.keys(data).map((key, index) => {
			const item = (
				<Card
					data={data[key]}
					key={index}
					id={key}
					affiliateLimit={str => this.affiliateLimit(str)}
					charLimit={str => this.charLimit(str)}
				/>
			);
			return item;
		});
		return list;
	}

	render() {
		const { data } = this.state;

		//console.log('state.data:', data);

		if (!data) {
			return <h1>Loading...</h1>;
		}

		return (
			<div className="container">
				<div className="mdl-layout">
					<div className="mdl-layout__content">
						<div className="mdl-grid">
							{this.renderCards(data)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
