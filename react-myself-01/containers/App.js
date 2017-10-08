import React from 'react';

import PropTypes from 'prop-types';

import Picker from '../components/Picker'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(nextSubreddit) {
        alert(nextSubreddit);
    }

    render() { //使用JSX返回节点
        return (
            <Picker
                onClick={this.handleClick}
            />
        );
    }
}




export default App;
