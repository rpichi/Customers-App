import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppHeader extends Component {
    render() {
        return (
            <div>
                <div className="app-header">
                <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

AppHeader.propTypes = {
    title : PropTypes.string.isRequired
};

export default AppHeader;