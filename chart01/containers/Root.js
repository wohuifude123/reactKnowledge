import React, { Component } from 'react'

import EchartsTest01 from '../components/EchartsTest01.js';


// import PieReact from '../components/PieReact.js';

import './Root.less';


import Intl from '../click/Intl.js';

import Hello from '../world/Hello.js';

import Header from '../components/Header';

import Bar from './Bar';

import Nationwide from '../components/Nationwide';



export default class Root extends Component {
    render() {
        return (
            <div id="whole">
                <Header content="图示"/>
                <Bar />
                <Nationwide />
            </div>
        )
    }
}
