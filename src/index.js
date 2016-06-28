/* @flow */

import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router'
import routes from './routing'

const App = () => {
  return (
    <Router
      history={hashHistory}
      routes={routes}
    />
  )
}

render(<App />, document.getElementById('root'));
