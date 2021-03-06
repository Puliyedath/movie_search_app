require('./styles/main.scss')
import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import MainComponent from './components/MainComponent'

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    logger,
  ));

render(
    <Provider store={store}>
      <MainComponent />
    </Provider>,
  document.getElementById('root')
);
