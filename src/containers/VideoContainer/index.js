/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './VideoContainer'

type Props = {
  source: string,
  enableDurationHandling: boolean,
  onTrackDuration: Function,
  onEndingVideo: Function,
  loop: boolean,
}

class VideoContainer extends Component {

  timer = null

  static defaultProps = {
    enableDurationHandling: false,
    onTrackDuration: () => true,
    onEndingVideo: () => true,
    loop: false,
  }

  componentDidMount() {
    const { onTrackDuration, onEndingVideo } = this.props

    this.timer = setInterval(() => {

      // Track duration
      onTrackDuration(
        this.refs.video.currentTime,
        this.refs.video.duration
      )

      // Check pause
      if (this.props.player.paused && !this.refs.video.paused) {
        this.refs.video.pause()
      }

      // Check ending of the video
      if (Math.floor(this.refs.video.currentTime) == Math.floor(this.refs.video.duration)) {
        onEndingVideo()
      }

    }, 750)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentWillReceiveProps(nextProps) {
    const { source, player } = nextProps
    const { paused } = player
    if (paused !== this.props.player.paused || source !== this.props.source) {
      if (paused) {
        this.refs.video.pause()
      } else {
        this.refs.video.play()
      }
    }
    if (nextProps.enableDurationHandling) {
      if (nextProps.currentTime.key !== this.props.currentTime.key) {
        this.refs.video.currentTime = nextProps.currentTime.value
      }
    }
  }

  render() {
    const { source, player, loop } = this.props
    return (
      <div className={styles.container}>
        <video
          ref="video"
          className={styles.video}
          muted={player.muted}
          autoPlay={true}
          loop={loop}
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
