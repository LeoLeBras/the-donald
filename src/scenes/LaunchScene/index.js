/* @flow */

import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'
import { Link } from 'react-router'
import { Motion, spring } from 'react-motion'
import { withRouter } from 'react-router'
import { compose } from 'recompose'
import Title from '@components/Title'
import Skip from '@components/Skip'
import StartButton from '@components/StartButton'
import styles from './LaunchScene'
import Video from './components/Video'
import Content from './components/Content'

type State = {
  open: boolean,
}

class LaunchScene extends Component {

  state: State = { open: false }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  onTrackDuration(time) {
    if (Math.floor(time) == 6) {
      this.setState({ open: true })
    }
  }

  onSkipingContent() {
    this.setState({ open: true })
  }

  onNext() {
    this.context.router.replace('/life')
  }

  render() {
    const { open } = this.state
    return (
      <div className={styles.container}>
        <Video
          onTrackDuration={::this.onTrackDuration}
          onSkipingContent={::this.onSkipingContent}
          open={open}
        />
        <Content
          onNext={::this.onNext}
          open={open}
        />
      </div>
    )
  }

}

export default LaunchScene
