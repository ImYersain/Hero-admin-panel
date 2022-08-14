import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from '../src/components/app/App';
import store from '../src/store/index';

import './styles/index.scss';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);


