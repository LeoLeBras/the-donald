/* @flow */

import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'
import { Link } from 'react-router'
import { TransitionMotion, Motion, spring } from 'react-motion'
import Title from '@components/Title'
import Video from '@components/Video'
import styles from './LaunchScene'

type State = {
  open: boolean,
}

class LaunchScene extends Component {
  state: State = { open: false }

  handleState() {
    this.setState({
      open: !this.state.open
    })
  }

  componentWillLeave(callback) {
    this.setState({
      open: !this.state.open
    })
    setTimeout(() => {
      callback()
    }, 100000)
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

  onTrackDuration(time) {
    console.log(time)
  }

  render() {
    return (
      <div className={styles.container}>
        <Video
          onTrackDuration={::this.onTrackDuration}
          source="http://localhost:3001/videos/launch.mp4"
        />
        <Motion style={{ toValue: spring(this.state.open ? 1 : 0) }}>
          {({ toValue }) => (
            <div style={{ opacity: toValue }}>
              <div className={styles.circle}></div>
              <div className={styles.wrapper}>
              <Title>Donald Trump</Title><br/>
              <span className={styles.substitle}>Why is winning ?</span>
              </div>
            </div>
          )}
        </Motion>
      </div>
    )
  }
}

export default LaunchScene
