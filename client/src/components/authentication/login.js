import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../helper_functions';
import { login, resetPassword } from '../../firebase/auth';

function setErrorMsg(error) {
    return {
        loginMessage: error
    };
}

class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        login(this.email.value, this.pw.value)
            .then(() => {
                this.props.history.push('/mentors/dashboard');
            })
            .catch(error => {
                this.setState(setErrorMsg('Invalid username/password.'));
            });
    };

    handleSignin(vals) {
        this.props.signin(vals);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth) {
            this.props.history.push('/features');
        }
    }

    resetPassword = () => {
        resetPassword(this.email.value)
            .then(() =>
                this.setState(
                    setErrorMsg(
                        `Password reset email sent to ${this.email.value}.`
                    )
                )
            )
            .catch(error =>
                this.setState(setErrorMsg(`Email address not found.`))
            );
    };

    render() {
        const { handleSubmit, reset, signinError } = this.props;
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(vals => this.handleSignin(vals))}>
                    <Field
                        name="email"
                        label="Email"
                        type="email"
                        component={renderInput}
                    />
                    <Field
                        name="password"
                        label="Password"
                        type="password"
                        component={renderInput}
                    />
                    <p className="text-danger">
                        {signinError}
                    </p>
                    <button className="btn btn-outline-primary mr-2">
                        Sign In
                    </button>
                    <button className="btn btn-outline-primary" onClick={reset}>
                        Clear Form
                    </button>
                    {this.state.loginMessage &&
                        <div className="alert alert-danger" role="alert">
                            <span
                                className="glyphicon glyphicon-exclamation-sign"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Error:</span>
                            &nbsp;{this.state.loginMessage}{' '}
                            <a
                                href="#"
                                onClick={this.resetPassword}
                                className="alert-link">
                                Forgot Password?
                            </a>
                        </div>}
                </form>
            </div>
        );
    }
}

function validate(vals) {
    const error = {};

    if (!vals.email) {
        error.email = 'Please enter an email';
    }

    if (!vals.password) {
        error.password = 'Please enter a password';
    }

    return error;
}

Login = reduxForm({
    form: 'login',
    validate
})(Login);

function mapStateToProps(state) {
    return {
        signinError: state.auth.error,
        auth: state.auth.authorized
    };
}

export default connect(mapStateToProps, { login })(Login);
