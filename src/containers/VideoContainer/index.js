/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './VideoContainer'

type Props = {
  source: string,
  onTrackDuration: Function,
}

class VideoContainer extends Component {

  timer = null

  componentDidMount() {
    const { onTrackDuration } = this.props
    this.timer = setInterval(() => {
      onTrackDuration(
        this.refs.video.currentTime,
        this.refs.video.duration
      )
    }, 750)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentWillReceiveProps(nextProps) {
    const { paused } = nextProps.player
    if (paused !== this.props.player.paused) {
      if (paused) {
        this.refs.video.pause()
      } else {
        this.refs.video.play()
      }
    }
    if (nextProps.currentTime.key !== this.props.currentTime.key) {
      this.refs.video.currentTime = nextProps.currentTime.value
    }
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
)(VideoContainer)
