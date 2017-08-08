import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Auth extends Component {
        componentWillMount() {
            if (!this.props.authenticated) {
                this.props.history.push('/mentors/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.history.push('/mentors/login');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authorized };
    }

    return connect(mapStateToProps)(Auth);
}
