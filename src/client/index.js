import React from 'react'
import { render } from 'react-dom'
import App from '../components/App/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'
import middleware from '../middleware'

const store = createStore(reducer, middleware)
const root = document.querySelector('#root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)

