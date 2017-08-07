import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import dancer from './img/hip.png';
import { addPerson } from '../actions/index';
import Navbar from './navbar';
import Footer from './footer';

class MentorsSignUp extends Component {
    submitForm(vals) {
        const data = {
            bio: {
                aboutme: vals.aboutme,
                affiliates: vals.affiliates,
                experience: vals.experience,
                location: vals.location,
                style: vals.style
            },
            name: vals.name
        };

        this.props.addPerson(data);
    }

    styleObj = {
        width: '50%',
        minWidth: '30%'
    };

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

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <Navbar />
                <div
                    id="MentorSignUp"
                    className="my-5 row mx-auto"
                    style={this.styleObj}>
                    <div className="col-12">
                        <h2 className="header text-center">
                            Sign Up to Become a Mentor
                        </h2>
                    </div>
                    <div className="col-12">
                        <form
                            className="form"
                            onSubmit={handleSubmit(values =>
                                this.submitForm(values)
                            )}>
                            <Field
                                name="name"
                                label="Name"
                                component={this.renderInput}
                            />
                            <Field
                                name="email"
                                label="Email"
                                component={this.renderInput}
                            />
                            <Field
                                name="style"
                                label="Style"
                                component={this.renderInput}
                            />
                            <Field
                                name="location"
                                label="Serving Location"
                                component={this.renderInput}
                            />
                            <Field
                                name="affiliates"
                                label="Affiliates"
                                component={this.renderInput}
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
                            <div className="d-block text-center">
                                <button className="btn btn-outline-success mr-3">
                                    Sign-Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = 'Please enter your name';
    }

    if (!values.email) {
        errors.email = 'Please enter a valid email';
    }

    if (!values.style) {
        errors.style = 'Please enter your preferred genre or form of dance';
    }

    if (!values.location) {
        errors.location = 'Please enter your serving location';
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
