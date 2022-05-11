import React, { Component } from 'react';
import JenssenContext from './JenssenContext';
import config from './index';

class JenssenProvider extends Component {
    render() {
        return (
            <JenssenContext.Provider value={config}>
                {this.props.children}
            </JenssenContext.Provider>
        )
    }
}

export default JenssenProvider;