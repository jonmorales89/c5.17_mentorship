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
      showModal,
      toggleModal,
      name,
      aboutme,
      affiliates,
      serving,
      email,
      photo
    } = this.props;
    if (showModal && !this.state.showForm) {
      //src={photo} 
      return (
          <div className="del-modal mdl-card">
            <div className="del-modal-content mdl-shadow--2dp">
              <div className="mdl-card__title mdl-card_modal mdl-card--expand">
                <h6 className="mdl-card__title-text">
                  {name}
                </h6>
                <img className="mdl-card_modal_img" src={"http://via.placeholder.com/100x100"} />
              </div>
              <div className="mdl-card__supporting-text">
                <div className="bold">About Me:</div>
                <div>
                    {aboutme}
                </div>
                <div>
                  <div className="bold">Affiliates:</div>
                  <span className="mdl-chip">
              <span className="mdl-chip__text">
                {affiliates}
              </span>
            </span>
                </div>
                <div>
                  <div className="bold">Serving Location:</div>
                  <div>
                      {serving}
                  </div>
                </div>
              </div>
              <div className="mdl-card__actions mdl-card--border buff">
                <button
                    onClick={() => {
                        toggleModal();
                    }}
                    className="mdl-button mdl-button-cancel mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  <i className="material-icons">cancel</i>
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
