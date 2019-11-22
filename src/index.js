import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '@csstools/normalize.css';
import './css/Index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
