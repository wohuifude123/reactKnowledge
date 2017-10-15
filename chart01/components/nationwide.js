import nw from '../data/nationwide.json'

import React, { Component } from 'react';

class Nationwide extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("第五个=="+nw.citys[5].name);
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default Nationwide;


