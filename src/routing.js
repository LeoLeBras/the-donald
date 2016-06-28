/* @flow */

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import DefaultLayout from '@layouts/DefaultLayout'
import LaunchScene from '@scenes/LaunchScene'
import IntroductionScene from '@scenes/IntroductionScene'

export default (
  <Route path="/" component={DefaultLayout}>
    <IndexRoute component={LaunchScene} />
    <Route path="introduction" component={IntroductionScene} />
  </Route>
)
