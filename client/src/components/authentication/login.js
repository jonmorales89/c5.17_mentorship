import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { renderInput } from '../helper_functions';
import { login, resetPassword, loginWithFacebook } from '../../actions';

function setErrorMsg(error) {
    return {
        loginMessage: error
    };
}

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginMessage: null
        };
    }

    handleLogin(vals) {
        this.props.login(vals);
    }

    handleReset(vals) {
        this.props
            .resetPassword(vals.email)
            .then(() => this.setState(setErrorMsg(`Password reset email sent to your email.`)))
            .catch(error => this.setState(setErrorMsg(`Email address not found.`)));
    }

    styleContainer = {
        minHeight: '50vh'
    };

    render() {
        const { handleSubmit, signinError } = this.props;
        return (
            <div style={this.styleContainer} className="py-5">
                <form
                    className="col-4 mx-auto py-3"
                    onSubmit={handleSubmit(vals => this.handleLogin(vals))}>
                    <h3 className="text-center">Login</h3>
                    <Field name="email" label="Email" type="email" component={renderInput} />
                    <Field
                        name="password"
                        label="Password"
                        type="password"
                        component={renderInput}
                    />
                    <div className="text-center">
                        <p
                            onClick={handleSubmit(vals => this.handleReset(vals))}
                            className="small my-0">
                            Forgot your password?
                        </p>
                        <button className="btn mt-2 mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-bgcolor--secondary-light text-white mr-2">
                            Sign In
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                this.props.loginWithFacebook();
                            }}
                            className="btn mt-2 mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-bgcolor--secondary-light text-white">
                            Facebook Login
                        </button>
                    </div>
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

export default connect(mapStateToProps, {
    login,
    resetPassword,
    loginWithFacebook
})(Login);
