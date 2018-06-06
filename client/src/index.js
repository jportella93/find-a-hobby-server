import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

export const URL = 'http://localhost:3000'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
