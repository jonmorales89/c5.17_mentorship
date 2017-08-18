import React, { Component } from 'react';
import axios from 'axios';
import './css/modal.css';

const BASE_URL = 'http://dansumentors.com:3000/mail';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondModal: false,
      email: '',
      text_one: '',
      text_two: '',
      name: ''
    };
  }

  emailInput(e) {
    this.setState({
      email: e.target.value
    });
  }

  textInputOne(e) {
    this.setState({
      text_one: e.target.value
    });
  }

  textInputTwo(e) {
    this.setState({
      text_two: e.target.value
    });
  }

  nameInput(e) {
    this.setState({
      name: e.target.value
    });
  }

  sendMail() {
    const data = this.state;
    console.log(data);
    axios
      .post(`${BASE_URL}`, { data })
      .then(resp => {
        console.log('Its working!', resp);
      })
      .catch(error => {
        console.warn('Error adding to server', error);
      });
    this.setState({ showForm: false });
  }

  render() {
    const { text, className, message, title, showForm } = this.props;
    if (showForm) {
      return (
        <div className="c-modal">
          <div className="c-modal-content">
            <input
              type="text"
              className="materialFormBorders form-control mb-3"
              placeholder="Name"
              onChange={e => this.nameInput(e)}
            />
            <textarea
              type="text"
              className="materialFormBorders form-control mb-3"
              rows="7"
              placeholder="About me & Goals"
              onChange={e => this.textInputOne(e)}
            />
            <textarea
              type="text"
              className="materialFormBorders form-control mb-3"
              rows="7"
              placeholder="Questions"
              onChange={e => this.textInputTwo(e)}
            />
            <input
              type="text"
              className="materialFormBorders form-control mb-3"
              placeholder="Email"
              onChange={e => this.emailInput(e)}
            />
            <div className="right">
              <button
                onClick={() => {
                  this.setState({ showModal: false });
                  this.setState({ showForm: true });
                  this.props.onClick();
                }}
                className="btn c-btn mr-6">
                Cancel
              </button>
              <button
                onClick={() => {
                  this.setState({ showForm: true });
                  this.props.onClick();
                  this.sendMail();
                }}
                className="btn c-btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <button className="mdl-button mdl-button-fl-right mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={() => this.props.onClick()}>
        Contact Form
      </button>
    );
  }
}

export default ContactForm;
