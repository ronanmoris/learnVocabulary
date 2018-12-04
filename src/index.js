import ReactDOM from 'react-dom';
import React from 'react';
import './style.css';

const title = 'My React Webpack Babel Basic Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

//take this out of here
if(module.hot) {
	module.hot.accept();
}
