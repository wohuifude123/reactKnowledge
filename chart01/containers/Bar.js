import React, { Component } from 'react'

import EchartsTest02 from '../components/EchartsTest02.js';
import Advertise from '../components/Advertise.js';

import Header from '../components/Header';

export default class Bar extends Component {
    render() {
        return (
            <div id="bar_adv">
                <EchartsTest02 />
                <Advertise />
            </div>
        )
    }
}
