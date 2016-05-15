import {StyleRoot} from 'radium'
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Dashboard from '../dashboard'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <StyleRoot>
      <Dashboard />
    </StyleRoot>
  </Provider>,
  document.querySelector('dashboard')
)
