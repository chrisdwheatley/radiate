import {StyleRoot} from 'radium'
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Dashboard from '../dashboard'
import reducer from './reducers'
import {default as Warn} from './experimental-features/warn'

const dashboard = document.querySelector('dashboard')
const store = createStore(reducer)

let app = <Warn />

if ('gridTemplateColumns' in document.body.style) {
  app = (
    <Provider store={store}>
      <StyleRoot>
        <Dashboard />
      </StyleRoot>
    </Provider>
  )
}

render(
  app,
  dashboard
)
