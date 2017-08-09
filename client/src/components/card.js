import React, { Component } from 'react';
import SearchModal from './search_list_modal';
import Confirm from './contact_modal.js';

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
        const { data, charLimit, dist } = this.props;

        return (
            <div
                onClick={() => this.toggleModal()}
                className="col-xs-4"
                dist={dist}
            >
                <div className="card" style={{ width: '20rem' }}>
                    <img
                        className="card-img-top"
                        src="https://dummyimage.com/318X180/b3b3b3/fff.png"
                    />
                    <div className="card-block">
                        <h6 className="card-title">
                            Name: {data.name}
                        </h6>
                        <div className="card-text">
                            <p>About Me:</p>
                            <p>
                                {charLimit(data.bio.aboutme)}
                            </p>
                            <p>
                                Affiliates: {data.bio.affiliates}
                            </p>
                            <p>
                                Serving Location: {data.bio.location}
                            </p>
                        </div>
                    </div>
                </div>
                <SearchModal
                    name={data.name}
                    aboutme={data.bio.aboutme}
                    affiliates={data.bio.affiliates}
                    serving={data.bio.location}
                    showModal={this.state.showModal}
                    toggleModal={() => this.toggleModal}
                />
            </div>
        );
    }
}

export default Card;
