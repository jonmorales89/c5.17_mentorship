import React, { Component } from 'react';
import './css/modal.css';
import ContactForm from './contact_modal.js';
import Paypal from './paypal.js';

class SearchModal extends Component {
  constructor(props) {
    super(props);
    const email = this.props.email;
    this.state = {
      showForm: false,
      email: this.props.email
    };
  }

  toggleForm() {
    this.setState({ showForm: !this.state.showForm });
    this.props.toggleModal();
  }
  handleSubmit(event) {
    this.props.handleSubmit();
    event.preventDefault();
  }
  render() {
    const {
      secondModal,
      showModal,
      toggleModal,
      name,
      aboutme,
      affiliates,
      serving,
      email
    } = this.props;
    if (showModal && !this.state.showForm) {
      return (
        <div>
          <div className="del-modal">
            <div className="del-modal-content">
              <p>
                TITLE: {name}
              </p>
              <p>
                About me: {aboutme}
              </p>
              <p>
                Affiliates: {affiliates}
              </p>
              <p>
                Serving City: {serving}
              </p>
              <button
                onClick={() => {
                  toggleModal();
                }}
                className="btn btn-outline-danger ">
                Cancel
              </button>
              <ContactForm showForm={this.state.showForm} onClick={() => this.toggleForm()} />
            </div>
          </div>
        </div>
      );
    } else if (this.state.showForm) {
      return <ContactForm showForm={this.state.showForm} onClick={() => this.toggleForm()} />;
    }
    return <div onClick={() => this.toggleModal} />;
  }
}

export default SearchModal;
