//make into a modal in such that when you sign up you also have to register
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAccount } from '../../actions/';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../helper_functions';
import SuccessMessage from './successMessage';
import '../css/modal.css';

class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registerError: null,
      showModal: false
    };
  }

  handleRegistration(values) {
    const { reset } = this.props;
    this.props.createAccount(values);
    reset();
  }

  render() {
    const { handleSubmit, text, className} = this.props;
    if(this.state.showModal) {
      return (
        <div className="c-modal">
          <div className="c-modal-content">
            <h1 className="text-center">Mentor Registration</h1>
              <Field name="emailReg" type="email" label="Email" component={renderInput} />
              <Field name="passwordReg" type="password" label="Password" component={renderInput} />
              <Field
                name="confirmPW"
                label="Confirm Password"
                type="password"
                component={renderInput}
              />
              <div>
                {/*this.props.msg ? this.props.msg :*/}
              </div>
              <div className="text-center">
                <button className="btn mt-2 mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-bgcolor--secondary-light text-white mr-2"
                  onClick={handleSubmit(values => this.handleRegistration(values))}>
                  Register
                </button>
                  <button 
                  className="btn mt-2 mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-bgcolor--secondary-light text-white"
                  onClick={() => this.setState({showModal: false})}>
                  Cancel</button>
              </div>
          </div>
        </div>
      );
    }
  return (
      <button className={className} onClick={() => this.setState({showModal: true})}>{text}</button>
    )
  }
}


export default connect(null, { createAccount })(RegisterModal);
