/* @flow */

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import DefaultLayout from '@layouts/DefaultLayout'
import LaunchScene from '@scenes/LaunchScene'
import ChapterScene from '@scenes/ChapterScene'
import SelectScene from '@scenes/SelectScene'
import WordsScene from '@scenes/WordsScene'
import WordScene from '@scenes/WordScene'
import SpeechScene from '@scenes/SpeechScene'

export default (
  <Route path="/" component={DefaultLayout}>
    <IndexRoute component={LaunchScene} />
    <Route path="chapter/:slug" component={ChapterScene} />
    <Route path="select" component={SelectScene} />
    <Route path="speech" component={SpeechScene} />
    <Route path="words" component={WordsScene} />
    <Route path="word/:slug" component={WordScene} />
  </Route>
)
