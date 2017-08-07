import types from './types';
import { db, firebaseAuth } from '../firebase';
import axios from 'axios';

export function getAllMentors() {
	return dispatch => {
		db.ref('Mentors').on('value', snapshot => {
			const data = snapshot.val();
			dispatch({
				type: types.GET_MENTORS,
				payload: data
			});
		});
	};
}

export function getNearbyMentors() {
	// version 2: not working
	let mentCord = {};
	const { data } = this.state;

	const GOOGLE_URL = `http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${this
		.props.match.params.zipcode}&sensor=false`;

	axios.get(`${GOOGLE_URL}`).then(resp => {
		const lat = resp.data.results[0].geometry.location.lat;
		const lng = resp.data.results[0].geometry.location.lng;

		const area = function(lat, lng) {
			const lat_change = 32 / 111.2;
			const lon_change = Math.abs(Math.cos(lat * (Math.PI / 180)));
			const bounds = {
				latitude_min: lat - lat_change,
				longitude_min: lng - lon_change,
				latitude_max: lat + lat_change,
				longitude_max: lng + lon_change
			};
			return bounds;
		};
		const list = Object.keys(data).map((key, index) => {
			const URL =
				'http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:' +
				data[key].bio.location +
				'&sensor=false';
			axios.get(`${URL}`).then(resp => {
				mentCord = resp.data.results[0].geometry.location;
				if (
					mentCord.lat > area(lat, lng).latitude_min &&
					mentCord.lat < area(lat, lng).latitude_max &&
					mentCord.lng > area(lat, lng).longitude_min &&
					mentCord.lng < area(lat, lng).longitude_max
				) {
					const item = (
						<div className="col-xs-4" key={index}>
							<div className="card" style={{ width: '20rem' }}>
								<img
									className="card-img-top"
									src="https://dummyimage.com/318X180/b3b3b3/fff.png"
								/>
								<div className="card-block">
									<h6 className="card-title">
										Name: {data[key].name}
									</h6>
									<div className="card-text">
										<p>About Me:</p>
										<p>
											{this.charLimit(data[key].bio.aboutme)}
										</p>
										<p>
											Affiliates: {data[key].bio.affiliates}
										</p>
										<p>
											Serving Location: {data[key].bio.location}
										</p>
									</div>
								</div>
							</div>
						</div>
					);
					this.setState({ list: [...this.state.list, item] });
				}
			});
		});
	});
}

export function addPerson(person) {
	db.ref('Mentors').push(person).then(resp => {
		console.log('Data added:', resp.key);
	});
	return {
		type: types.ADD_PERSON,
		payload: person
	};
}

export function authenticate(email, pw) {
	return firebaseAuth()
		.createUserWithEmailAndPassword(email, pw)
		.then(saveUser);
}

export function logout() {
	return firebaseAuth().signOut();
}

export function login({ email, pw }) {
	return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

export function resetPassword(email) {
	return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user) {
	return db.ref
		.child(`users/${user.uid}/info`)
		.set({
			email: user.email,
			uid: user.uid
		})
		.then(() => user);
}
