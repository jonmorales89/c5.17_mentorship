import React from 'react';
import {Link} from 'react-router-dom';
import Confirm from './contact_modal.js';

function Form () {
	return (
		<div>
		 <Confirm className="btn btn-outline-info" 
		   
		  text="Contact Form" onClick={() => this.handleDelete(item._id)}/>
		</div>
	)
}

export default Form;