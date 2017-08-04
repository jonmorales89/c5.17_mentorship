import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Confirm from './contact_modal.js';

const BASE_URL = 'localhost:3000/mail';

class ContactForm extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Confirm
					className="btn btn-outline-info"
					text="Contact Form"
					onClick={() => this.handleDelete(item._id)}
				/>
			</div>
		);
	}
}

export default ContactForm;
