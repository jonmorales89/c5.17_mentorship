import React, { Component } from 'react';
import SearchModal from './search_list_modal';
import ContactForm from './contact_modal.js';
import Paypal from './paypal.js';
import './css/card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      secondModal: false
    };
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const { data, charLimit, affiliateLimit, dist } = this.props;
    return (
      <div
        onClick={() => this.toggleModal()}
        className="mdl-cell mdl-cell--4-col mdl-card mdl-card_z mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card_searchList mdl-card--expand">
          <img className="card-image" src="https://graph.facebook.com/10211383358873877/picture?width=175&height=175" />
          <h6 className="card-title-text-position mdl-card__title-text">
            {data.name}
          </h6>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="bold">About Me:</div>
          <div>
            {charLimit(data.bio.aboutme)}
          </div>
          <div>
            <div className="bold">Affiliates:</div>
            <span className="mdl-chip">
              <span className="mdl-chip__text">
                {affiliateLimit(data.bio.affiliates)}
              </span>
            </span>
          </div>
          <div>
            <div className="bold">Serving Location:</div>
            <div>
              {data.bio.location}
            </div>
          </div>
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <button className="mdl-button mdl-button-fl-right mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Read More
          </button>
          <Paypal email={data.bio.email} />
        </div>
        <SearchModal
          name={data.name}
          aboutme={data.bio.aboutme}
          affiliates={data.bio.affiliates}
          email={data.bio.email}
          serving={data.bio.location}
          showModal={this.state.showModal}
          toggleModal={() => this.toggleModal()}
        />
      </div>
    );
  }
}

export default Card;
