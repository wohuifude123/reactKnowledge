import React from 'react';

import ReactDOM from 'react-dom';

import Root from '../containers/Root.js';



require('./styles/index.less');//引入css文件

ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
