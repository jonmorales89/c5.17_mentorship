import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addPerson } from '../../actions/index';
import { renderInput } from '../helper_functions';

class MentorsSignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            successMessage: false
        };
    }

    submitForm(vals) {
        const data = {
            bio: {
                aboutme: vals.aboutme,
                affiliates: vals.affiliates,
                experience: vals.experience,
                location: vals.location,
                style: vals.style,
                email: vals.email
            },
            name: vals.name
        };
        const { reset } = this.props;
        this.props.addPerson(data);
        reset();
        this.setState({
            successMessage: true
        });
    }

    Message() {
        if (this.state.successMessage) {
            return (
                <div className="form-group has-success">
                    <div className="form-control-feedback text-center">
                        Success! You've done it. Thank you for your
                        participation!
                    </div>
                </div>
            );
        }
    }

    renderTextArea({ input, label, meta: { touched, error } }) {
        return (
            <div className="form-group my-1">
                <label>
                    {label}
                </label>
                <textarea
                    {...input}
                    name={input.name}
                    type="text"
                    className="form-control mr-2 mb-2"
                />
                {
                    <p className="form-text text-danger">
                        {touched && error}
                    </p>
                }
            </div>
        );
    }

    styleContainer = {
        width: '50%',
        minWidth: '30%'
    };

    styleForm = {};

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="my-5 mx-auto" style={this.styleContainer}>
                <div className="col-12">
                    <form
                        className="col-12 mx-auto my-0 py-3"
                        onSubmit={handleSubmit(values =>
                            this.submitForm(values)
                        )}>
                        <div className="col-12 my-0 text-center">
                            <h2>Register to Become a Mentor</h2>
                            <p>
                                *BETA* We are currently operating only in
                                California
                            </p>
                        </div>
                        <Field
                            name="name"
                            label="Name"
                            component={renderInput}
                        />
                        <Field
                            name="email"
                            label="Email"
                            component={renderInput}
                        />
                        <Field
                            name="style"
                            label="Style"
                            component={renderInput}
                        />
                        <Field
                            name="location"
                            label="Serving City"
                            component={renderInput}
                        />
                        <Field
                            name="affiliates"
                            label="Company(s)"
                            component={renderInput}
                        />
                        <Field
                            name="aboutme"
                            label="About Me"
                            component={this.renderTextArea}
                        />
                        <Field
                            name="experience"
                            label="Experience"
                            component={this.renderTextArea}
                        />
                        <div className="text-center">
                            <button className="btn mt-2 mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-bgcolor--primary-light">
                                Register
                            </button>
                        </div>
                        {this.Message()}
                    </form>
                </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = 'Please enter your name.';
    }

    if (!values.email) {
        errors.email = 'Please enter a valid email.';
    }

    if (!values.style) {
        errors.style = 'Please enter your preferred genre or form of dance.';
    }

    if (!values.affiliates) {
        errors.affiliates = 'Please enter your company or organization.';
    }

    if (!values.location) {
        errors.location = 'Please enter your serving city.';
    }

    if (!values.aboutme || values.aboutme.length < 75) {
        errors.aboutme = 'Hey, tell us more about yourself!';
    }

    if (!values.experience || values.experience.length < 75) {
        errors.experience = "Hey, tell us what you've been doing!";
    }

    return errors;
}

MentorsSignUp = reduxForm({
    form: 'mentors-sign-up',
    validate: validate
})(MentorsSignUp);

export default connect(null, { addPerson })(MentorsSignUp);
