import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const styles = [
    {
        name: '91765'
    },
    {
        name: '91766'
    },
    {
        name: '91789'
    },
    {
        name: '91744'
    },
    {
        name: '91790'
    },
    {
        name: '91734'
    }
];

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : styles.filter( style => style.name.toLowerCase().slice(0, inputLength) === inputValue)
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
);

class Example extends Component {
    constructor(){
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        })
    };

    render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            palceholder: 'Type a dance style',
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default Example;