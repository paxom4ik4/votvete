import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app";

import smoothscroll from 'smoothscroll-polyfill';

import './index.css'


smoothscroll.polyfill();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
