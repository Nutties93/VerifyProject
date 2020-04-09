import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import history from "./history";
import routes from './Routes';
import { Router} from 'react-router-dom';

ReactDOM.render(
    <Router history={history} routes={routes}>
        <App />
    </Router>
, document.getElementById('root'));
registerServiceWorker();
