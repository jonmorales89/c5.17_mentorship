import React from "react";
import { Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Button, Image } from "react-bootstrap";
import hip from './img/hip.png';
import './styles.css';

const LogIn = () => {
    return (
        <div className="login_container">
            <p className="header">Dansu Mentors</p>
            <Image className="image" src={hip} responsive />
            <Form horizontal className="form">
                <FormGroup bsSize="large" controlId="formHorizontalEmail">
                    <Col className="margin_text">
                    Email
                    </Col>
                    <Col>
                        <FormControl type="email" placeholder="Email"/>
                    </Col>
                </FormGroup>

                <FormGroup bsSize="large" controlId="formHorizontalPassword">
                    <Col className="margin_text">
                    Password
                    </Col>
                    <Col>
                        <FormControl type="password" placeholder="Password"/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col>
                        <Button bsSize="large" className="btn btn-outline-success mr-2" type="submit">
                            Sign in
                        </Button>
                        <Button bsSize="large" className="btn btn-outline-danger mr-2" type="submit">
                            Cancel
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
};

export default LogIn;