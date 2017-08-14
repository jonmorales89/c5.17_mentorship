import React, { Component } from "react";
import { Link } from "react-router-dom";
import Confirm from "./contact_modal.js";
import firebase from "firebase";

// const BASE_URL = 'localhost:3001/mail';

class ContactForm extends Component {
  render() {
    return (
      <div>
        <Confirm className="btn btn-outline-info" text="Contact Form" />
      </div>
    );
  }
}

export default ContactForm;

// var config = {
// 	apiKey: 'AIzaSyA2Ybrw7spKPlA_ifaDoiRFB_zNNX6aw0M',
// 	authDomain: 'dansumentors.firebaseapp.com',
// 	databaseURL: 'https://dansumentors.firebaseio.com',
// 	projectId: 'dansumentors',
// 	storageBucket: 'dansumentors.appspot.com',
// 	messagingSenderId: '264293617297'
// };
// firebase.initializeApp(config);

//Mentors.(random_id).bio.location
