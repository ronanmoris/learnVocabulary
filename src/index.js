import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.js'
import './style.css';

const title = 'My React Webpack Babel Basic Setup';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

//take this out of here
if(module.hot) {
	module.hot.accept();
}
