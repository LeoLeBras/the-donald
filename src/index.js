/* @flow */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import routes from './routing'
import createStore from '@store/create'

const App = () => {
  return (
    <Provider store={createStore()}>
      <Router
        history={hashHistory}
        routes={routes}
      />
    </Provider>
  )
}

render(<App />, document.getElementById('root'))
