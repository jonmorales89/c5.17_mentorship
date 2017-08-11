import React, { Component } from 'react';
import { db } from '../../firebase';
import axios from 'axios';
import Card from '../../components/card.js';
import '../css/card.css';

//Mentor Profile Picture
//Dashboard searchbar

export default class SearchList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			list: [],
			showModal: false
		};
	}

	componentWillMount() {
		db.ref('Mentees').on('value', snapshot => {
			const data = snapshot.val();
			console.log('In firebase CB', data);
			this.setState({ data: { ...data } });
			this.renderCards(data);
		});
	}

	charLimit(value) {
		const mentorBio = value;
		console.log(mentorBio);
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
		console.log(value);
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
					affiliateLimit={str => this.affiliateLimit(str)}
					charLimit={str => this.charLimit(str)}
				/>
			);
			this.setState({ list: [...this.state.list, item] });
		});
	}

	render() {
		const { list } = this.state;
		if (!list) {
			return <h1>Loading...</h1>;
		}
		return (
			<div className="container">
				<div className="mdl-layout">
					<div className="mdl-layout__content">
						<div className="mdl-grid">
							{list}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
