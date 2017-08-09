import React, { Component } from 'react';
import './css/modal.css';
import SearchList from './search_list.js';
import ContactForm from './contact_mentor_modal.js';

class SearchModal extends Component {
    render() {
        const {
            showModal,
            toggleModal,
            name,
            aboutme,
            affiliates,
            serving
        } = this.props;

        if (showModal) {
            return (
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
                            className="btn btn-outline-danger "
                        >
                            Paypal
                        </button>
                        <ContactForm />
                    </div>
                </div>
            );
        }
        return <div onClick={() => this.toggleModal} />;
    }
}

export default SearchModal;
