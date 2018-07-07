import React from 'react'
import Game from '../Game/Game'
import { connect } from 'react-redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../../reducers'
import middleware from '../../middleware'

const store = createStore(reducer, middleware)

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
)

export default App
