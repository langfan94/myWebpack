import '../css/login.css'
import '../css/common.css'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
function component() {
    var element = document.createElement('div');
    // console.log(_);
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
  } 

ReactDOM.render(
  <App />
  ,document.getElementById('root')
);