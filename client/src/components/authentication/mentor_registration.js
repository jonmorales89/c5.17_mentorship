import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addMentor, createAccount } from '../../actions/index';
import { renderTextArea, renderInput } from '../helper_functions';

class MentorRegistration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            successMessage: false,
            showModal: false
        };
    }

    submitForm(vals) {
        console.log('vals',vals,'in mentorregistration');
        const { emailReg, passwordReg } = vals;
        console.log('email reg and pwreg', emailReg, passwordReg);
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
        this.props.createAccount(emailReg,passwordReg);
        this.props.addMentor(data);
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
                        Success! You've done it. Thank you for your participation!
                    </div>
                </div>
            );
        }
    }

    styleContainer = {
        width: '50%',
        minWidth: '30%'
    };

    renderModal() {
        const { handleSubmit } = this.props;
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
                    type="submit">
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
            <button className="btn mt-2 mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-bgcolor--secondary-light text-white" onClick={() => this.setState({showModal: true})}>Register</button>
        )
    }
    

    renderInput(values) {
        const { type, meta: { touched, error }, label, input } = values;
        const hasError = touched && error;
        return (
            <div className={`form-group ${hasError ? 'has-danger' : ''}`}>
                <label>
                    {label}
                </label>
                <input
                    {...values.input}
                    name={input.name}
                    className={`form-control ${hasError ? 'form-control-danger' : ''}`}
                />
                <div className="form-control-feedback">
                    {hasError ? error : ''}
                </div>
            </div>
        );
    }



    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="my-5 mx-auto" style={this.styleContainer}>
                <div className="col-12">
                    <form
                        className="col-12 mx-auto my-0 py-3"
                        onSubmit={handleSubmit(values => this.submitForm(values))}>
                        <div className="col-12 my-0 text-center">
                            <h2>Become a Mentor</h2>
                            <p>*BETA* We are currently operating only in California</p>
                        </div>
                        <Field name="name" label="Name" component={this.renderInput} />
                        <Field name="email" label="Email" component={this.renderInput} />
                        <Field name="style" label="Style" component={this.renderInput} />
                        <Field
                            name="location"
                            label="Serving Zipcode"
                            component={this.renderInput}
                        />
                        <Field name="affiliates" label="Company(s)" component={this.renderInput} />
                        <Field name="aboutme" label="About Me" component={renderTextArea} />
                        <Field name="experience" label="Experience" component={renderTextArea} />
                        <div className="text-center">
                            {this.renderModal()}
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

    if (!values.location || values.location.length != 5) {
        errors.location = 'Please enter a valid zipcode!';
    }

    if (!values.aboutme || values.aboutme.length < 75) {
        errors.aboutme = 'Hey, tell us more about yourself! (min. 75 characters)';
    }

    if (!values.experience || values.experience.length < 75) {
        errors.experience = "Hey, tell us what you've been doing! (min. 75 characters)";
    }

    if (!values.emailReg) {
        errors.emailReg = "Please enter a valid email";
    }

    if (!values.passwordReg) {
        errors.passwordReg = "Please enter password (min 6 characters)";
    }

    if (values.confirmPW !== values.passwordReg) {
        errors.confirmPW = "Your passwords do not match";
    }

    return errors;
}

MentorRegistration = reduxForm({
    form: 'mentors-sign-up',
    validate: validate
})(MentorRegistration);

export default connect(null, { addMentor, createAccount })(MentorRegistration);