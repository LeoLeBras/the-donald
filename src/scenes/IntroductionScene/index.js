/* @flow */

import React, { Component } from 'react'
import styles from './styles'

class IntroductionScene extends Component {

  componentWillLeave(callback) {
    console.log('componentWillLeave')
    callback()
  }

  componentDidAppear() {
    console.log('componentDidAppear')
  }
  componentDidEnter() {
    console.log('componentDidEnter')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return (
      <div>
        <h1>IntroductionScene</h1>
        <div className={styles.box}></div>
      </div>
    )
  }
}

export default IntroductionScene
