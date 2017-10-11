import React, { Component } from 'react'

import EchartsTest01 from '../components/EchartsTest01.js';
import EchartsTest02 from '../components/EchartsTest02.js';
import Advertise from '../components/Advertise.js';
// import PieReact from '../components/PieReact.js';

import '../styles/root.less';

export default class Root extends Component {
    render() {
        return (
            <div>
                <EchartsTest01 />
                <EchartsTest02 />
                <Advertise />
            </div>
        )
    }
}
