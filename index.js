import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<div><Header/><App /></div>, document.getElementById('root'));
registerServiceWorker();
