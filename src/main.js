import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Dashboard from '../dashboard'
import './main.css'
import './reset.css'
import 'react-flexr/styles.css'
import poll from './reducers'

const store = createStore(poll)

render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.querySelector('dashboard')
)
