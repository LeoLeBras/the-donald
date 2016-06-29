/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Video'

type Props = {
  source: string,
  onTrackDuration: Function,
}

class Video extends Component {

  timer = null

  componentDidMount() {
    const { onTrackDuration } = this.props
    this.timer = setInterval(() => {
      onTrackDuration(
        this.refs.video.currentTime
      )
    }, 750)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { source, player } = this.props
    return (
      <div className={styles.container}>
        <video
          ref="video"
          className={styles.video}
          muted={player.muted}
          autoPlay={true}
          src={source}>
        </video>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  player: state.player,
})

export default connect(
  mapStateToProps
)(Video)
