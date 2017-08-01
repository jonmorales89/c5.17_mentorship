import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import dancer from './img/hip.png';
import { addPerson } from '../actions/index';
import Navbar from './navbar';
import Footer from './footer';

class SignUp extends Component {
    submitForm(vals, reset) {
        this.props.addPerson(vals);
        reset();
    }

    renderInput({ input, label, meta: { touched, error } }) {
        return (
            <div className="form-group">
                <label className="mr-2">
                    {label}
                </label>
                <input
                    {...input}
                    name={input.name}
                    type="text"
                    className="form-control mr-2"
                />
                {/*<p className="form-text text-danger">{touched && error}</p>*/}
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <Navbar />
                <div id="login" className="my-5 row">
                    <div className="col-12">
                        <h2 className="header text-center">Dansu Mentors</h2>
                    </div>
                    <div className="col-12">
                        <img className="rounded mx-auto" src={dancer} />
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
                            <div className="d-block text-center mb-2">
                                <input type="checkbox" />
                                Remember Me
                            </div>
                            <div className="d-block text-center">
                                <button className="btn btn-outline-success mr-3">
                                    SignUp
                                </button>
                                <button className="btn btn-outline-danger">
                                    Cancel
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

    if (values.title && values.title.length < 3) {
        errors.title = 'Title must be at least 3 characters';
    }

    if (!values.title) {
        errors.title = 'Please enter a title';
    }
    if (!values.details) {
        errors.details = 'Please enter some details about your to do item';
    }

    return errors;
}

SignUp = reduxForm({
    form: 'add-item',
    validate: validate
})(SignUp);

export default connect(null, { addPerson: addPerson })(SignUp);

// class SignUp extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar />
//                 <div className="SignUp_container">
//                     <Form horizontal className="form">
//                         <FormGroup
//                             bsSize="large"
//                             controlId="formHorizontalEmail">
//                             <Col className="margin_text">Email</Col>
//                             <Col>
//                                 <FormControl type="email" placeholder="Email" />
//                             </Col>
//                         </FormGroup>

//                         <FormGroup
//                             bsSize="large"
//                             controlId="formHorizontalPassword">
//                             <Col className="margin_text">Password</Col>
//                             <Col>
//                                 <FormControl
//                                     type="password"
//                                     placeholder="Password"
//                                 />
//                             </Col>
//                         </FormGroup>

//                         <FormGroup>
//                             <Col>
//                                 <Checkbox>Remember me</Checkbox>
//                             </Col>
//                         </FormGroup>

//                         <FormGroup>
//                             <Col>
//                                 <Button
//                                     bsSize="large"
//                                     className="btn btn-outline-success mr-2"
//                                     type="submit">
//                                     Sign in
//                                 </Button>
//                                 <Button
//                                     bsSize="large"
//                                     className="btn btn-outline-danger mr-2"
//                                     type="submit">
//                                     Cancel
//                                 </Button>
//                             </Col>
//                         </FormGroup>
//                     </Form>
//                 </div>
//                 <Footer />
//             </div>
//         );
//     }
// }

// export default SignUp;
