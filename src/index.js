import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logger from 'redux-logger'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index'
import App2 from './components/App2'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducer)

  store.subscribe(() =>
        console.log("store",store.getState())
     )
ReactDOM.render(
  <Provider store={store}>
    <Router>
     <Route exact path="/" exact component={App}/>
     <Route path="/form" exact component={App2}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
