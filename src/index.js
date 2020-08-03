import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import {Routers} from './containers';
import {Provider} from 'react-redux';
import {store} from '../src/store/store'

// global style
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <Routers />
        <ToastContainer/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
