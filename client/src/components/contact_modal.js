import React, { Component } from 'react';
import axios from 'axios';
import './css/modal.css';

const BASE_URL = 'http://localhost:3001/mail';

class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    sendMail() {
        const email = {
            to: this.email.value
        };

        const name = {
            subject: this.name.value
        };

        const text = {
            text: `${this.text_two.value} AND ${this.text_one.value}`
        };
        console.log('TEXT OBJECT WORKS:', text);

        axios
            .post(`${BASE_URL}`, { email, name, text })
            .then(resp => {
                console.log('Its working!');
            })
            .catch(error => {
                console.warn('Error adding to server', error);
            });
        this.setState({ showModal: false });
    }

    render() {
        const { text, className, message, title } = this.props;
        if (this.state.showModal) {
            return (
                <div className="c-modal">
                    <div className="c-modal-content">
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Name"
                            ref={name => (this.name = name)}
                        />
                        <textarea
                            type="text"
                            className="form-control mb-3"
                            rows="7"
                            placeholder="About me & Goals"
                            ref={text => (this.text_one = text)}
                        />
                        <textarea
                            type="text"
                            className="form-control mb-3"
                            rows="7"
                            placeholder="Questions"
                            ref={text => (this.text_two = text)}
                        />
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Email"
                            ref={email => (this.email = email)}
                        />
                        <button
                            onClick={() => {
                                this.setState({ showModal: false });
                            }}
                            className="btn btn-outline-danger mr-6"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => this.sendMail()}
                            className="btn btn-outline-success"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            );
        }
        return (
            <button
                className={className}
                onClick={() => this.setState({ showModal: true })}
            >
                {text}
            </button>
        );
    }
}

export default Confirm;
