//make into a modal in such that when you sign up you also have to register
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAccount } from '../../actions/';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../helper_functions';
import SuccessMessage from './successMessage';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registerError: null,
      messageSuccess: false
    };
  }

  handleSubmit(values) {
    const { reset } = this.props;
    createAccount(values.email, values.password);
    this.setState({
      messageSuccess: true
    });
    reset();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="col-4 mx-auto my-5">
        <h1 className="text-center">Mentor Registration</h1>
        <form
          onSubmit={handleSubmit(values => this.handleSubmit(values))}
          className="form">
          <Field
            name="email"
            type="email"
            label="Email"
            component={renderInput}
          />
          <Field
            name="password"
            type="password"
            label="Password"
            component={renderInput}
          />
          <Field
            name="confirmPW"
            label="Confirm Password"
            type="password"
            component={renderInput}
          />
          <SuccessMessage success={this.state.messageSuccess} />
          <div className="text-center">
            <button className="btn mt-2 mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-bgcolor--primary-light">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please enter a valid email!';
  }

  if (!values.password) {
    errors.password = 'Please enter a password!';
  }

  if (values.password !== values.confirmPW) {
    errors.confirmPW = 'Your passwords do not match';
  }

  return errors;
}

Register = reduxForm({
  form: 'mentors-register',
  validate: validate
})(Register);

export default connect(null)(Register);
