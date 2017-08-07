import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login, resetPassword } from '../../firebase/auth';

class Login extends Component {
    submitForm(vals) {
        console.log('vals', vals);
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
                />
                <p className="form-text text-danger">
                    {touched && error}
                </p>
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <div id="login" className="my-5 row">
                    <div className="col-12">
                        <h2 className="header text-center">Login</h2>
                    </div>
                    <div className="col-12">
                        <form
                            className="form"
                            onSubmit={handleSubmit(values =>
                                this.submitForm(values, reset)
                            )}>
                            <Field
                                name="email"
                                label="Email"
                                component={this.renderInput}
                            />
                            <Field
                                name="password"
                                label="Password"
                                component={this.renderInput}
                            />
                            <div className="d-block text-center mb-2 mr-2">
                                <input type="checkbox" />
                                <p className="ml-2 d-inline">Remember Me</p>
                            </div>
                            <div className="d-block text-center">
                                <button className="btn btn-outline-success mr-3">
                                    Login
                                </button>
                                <button className="btn btn-outline-danger">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Please enter a valid email or password';
    }
    if (!values.password) {
        errors.password = 'Please enter a valid email or password';
    }

    return errors;
}

Login = reduxForm({
    form: 'add-person',
    validate: validate
})(Login);

export default connect(null)(Login);
