import React from "react";
import { connect } from "react-redux";
import { addPerson } from "../actions";

const Add = props => {
	const data = {
		bio: {
			aboutme:
				'Dribble Floater, formerly known as the group Hansen before merging together into his final form, "The Shoes".  He was born in Cloud City on planet Bespin and had to get to earth where they havent even seen it been brung.  He got his famous shoes which all his power comes from and ran from Bespin to Earth while completing the Kessel run in under 11 Parsecs. Hes won every dancing award imaginable and trained every secret behind the Jabawockees moves.',
			affiliates: "Princeton Dance Team",
			awards:
				"Completed the kessel run in only 11 parsecs. Won dancer of the clouds in 1998.  Personally instructed ewoks how to tribal dance.",
			experience: "Golden Shoes",
			location: "Cloud City, Bespin",
			style: "David Blaine",
			picture:
				"https://en-pointe.com/wp-content/uploads/2012/06/shutterstock_31875292.jpg"
		},
		mentees: {
			id: 4
		},
		name: 'Dribble "The Shoes" Floater',
		reviews: 9
	};

	function addItem() {
		console.log("Add item called");
		props.addPerson(data);
	}

	return (
		<div>
			<h1>Add Item</h1>
			<button onClick={() => addItem()}>Add Item</button>
		</div>
	);
};

export default connect(null, { addPerson })(Add);
