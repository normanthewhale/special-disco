import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // import BrowserHistory from;
import registerServiceWorker from './registerServiceWorker';

// history={browserHistory}
ReactDOM.render( <BrowserRouter><App/></BrowserRouter>, document.getElementById( 'root' ) );
registerServiceWorker();
