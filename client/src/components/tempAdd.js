import React from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../actions';

const Add = (props) => {

	const data = {
		bio: {
			aboutme: 'Her is about me',
			affiliates: 'LearningFuze',
			awards: 'Awesome Award',
			experience: 'Some',
			location: 'Irvine, Ca',
			style: 'Tap'
		},
		mentees: {
			id: 12
		},
		name: 'Gene Gene the dancing machine',
		reviews: 7
	};
	
	function addItem(){
		console.log('Add item called');
		props.addPerson(data);
	}

	return (
		<div>
			<h1>Add Item</h1>
			<button onClick={() => addItem()}>Add Item</button>
		</div>
	)
}

export default connect(null, {addPerson})(Add);