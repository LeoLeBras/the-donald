/* @flow */

import { createStore, combineReducers, compose } from 'redux'
import * as reducers from './reducers'

export default function(initialState) {
  return createStore(
    combineReducers({ ...reducers }),
    initialState,
  )
}
