import ReactDOM from 'react-dom';
import React from 'react';
import './style.css';
//import reset css

const title = 'My React Webpack Babel Basic Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

//take this out of here
module.hot.accept();
