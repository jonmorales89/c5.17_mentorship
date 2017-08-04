import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../firebase/auth';
import { Field, reduxForm } from 'redux-form';
import Navbar from '../navbar';
import Footer from '../footer';
import SuccessMessage from './successMessage';

class MentorsRegister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registerError: null,
      messageSuccess: false
    };
  }

  handleSubmit(values) {
    const { reset } = this.props;
    authenticate(values.email, values.password).catch(error => {
      console.log('form submitted');
      this.setState({
        registerError: error,
        messageSuccess: true
      });
      reset();
    });
  }

  renderInput({ input, label, meta: { touched, error } }) {
    return (
      <div className="form-group my-1">
        <label className="mr-2">
          {label}
        </label>
        <input
          {...input}
          name={input.name}
          type="text"
          className="form-control mr-2 mb-2"
          placeholder="Enter your email"
        />
        <p className="form-text text-danger">
          {touched && error}
        </p>
      </div>
    );
  }

  renderPWInput({ input, label, meta: { touched, error } }) {
    return (
      <div className="form-group my-1">
        <label className="mr-2">
          {label}
        </label>
        <input
          {...input}
          name={input.name}
          type="password"
          className="form-control mr-2 mb-2"
          placeholder="Enter a password"
        />
        <p className="form-text text-danger">
          {touched && error}
        </p>
      </div>
    );
  }

  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div>
        <Navbar />
        <div className="col-4 mx-auto my-5">
          <h1 className="text-center">Mentor Registration</h1>
          <form
            onSubmit={handleSubmit(values => this.handleSubmit(values))}
            className="form">
            <Field name="email" component={this.renderInput} />
            <Field name="password" component={this.renderPWInput} />
            <SuccessMessage success={this.state.messageSuccess} />
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
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

  return errors;
}

export default reduxForm({
  form: 'mentors-register',
  validate: validate
})(MentorsRegister);
