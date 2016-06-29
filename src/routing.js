/* @flow */

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import DefaultLayout from '@layouts/DefaultLayout'
import LaunchScene from '@scenes/LaunchScene'
import LifeScene from '@scenes/LifeScene'
import SelectScene from '@scenes/SelectScene'
import WordsScene from '@scenes/WordsScene'
import SpeechScene from '@scenes/SpeechScene'

export default (
  <Route path="/" component={DefaultLayout}>
    <IndexRoute component={LaunchScene} />
    <Route path="life" component={LifeScene} />
    <Route path="select" component={SelectScene} />
    <Route path="speech" component={SpeechScene} />
    <Route path="words" component={WordsScene} />
  </Route>
)
