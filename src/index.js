import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import 'rxjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Store/Store';
import axios from 'axios';
axios.defaults.baseURL = 'https://reqres.in/api/';
initializeIcons();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();