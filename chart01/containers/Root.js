import React, { Component } from 'react'

import EchartsTest01 from '../components/EchartsTest01.js';
import EchartsTest02 from '../components/EchartsTest02.js';
import advertise from '../components/advertise.js';


export default class Root extends Component {
    render() {
        return (
            <div>
                <EchartsTest01 />
                <EchartsTest02 />
                <advertise />
            </div>
        )
    }
}
