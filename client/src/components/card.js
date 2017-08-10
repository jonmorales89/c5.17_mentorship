import React, { Component } from 'react';
import SearchModal from './search_list_modal';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {
        const { data, charLimit, affiliateLimit ,dist } = this.props;

        return (
            <div
                onClick={() => this.toggleModal()}
                className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp"
                dist={dist}
            >
                    <div className="mdl-card__title mdl-card--expand">
                        <h6 className="mdl-card__title-text">
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
                                <span className="mdl-chip__text">{affiliateLimit(data.bio.affiliates)}</span>
                           </span>
                       </div>
                       <div>
                           <div className="bold">Serving Location:</div>
                           <div>{data.bio.location}</div>
                       </div>
                    </div>
                    <div className="mdl-card__actions mdl-card--border">
                        <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Read More</button>
                    </div>
            <SearchModal
                    name={data.name}
                    aboutme={data.bio.aboutme}
                    affiliates={data.bio.affiliates}
                    serving={data.bio.location}
                    showModal={this.state.showModal}
                    toggleModal={() => this.toggleModal()}
            />
            </div>
        );
    }
}

export default Card;
