import React from 'react';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'

import configureStore from './configureStore'


import App from './containers/App.js';

import Select from './containers/Select.js';

import Root from './containers/Root.js';


import _ from 'lodash';

ReactDOM.render(<App />,
    document.getElementById('App'))

ReactDOM.render(<Select />,
    document.getElementById('Select'))

ReactDOM.render(<Root />,
    document.getElementById('Root'))



