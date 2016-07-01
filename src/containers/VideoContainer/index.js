/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Motion, spring } from 'react-motion'
import StaticContainer from 'react-static-container'
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
      if (onTrackDuration && this.refs.video) {
        onTrackDuration(
          this.refs.video.currentTime,
          this.refs.video.duration
        )
      }

      // Check pause
      if (this.props.player.paused && !this.refs.video.paused) {
        this.refs.video.pause()
      }

      // Check ending of the video
      if (this.refs.video && Math.floor(this.refs.video.currentTime) == Math.floor(this.refs.video.duration)) {
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

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.source != this.props.source ||
      nextProps.player.paused != this.props.player.paused ||
      nextProps.player.muted != this.props.player.muted
    )
  }

  render() {
    const { source, player, loop } = this.props
    return (
      <div className={styles.container}>
        <video
          ref="video"
          className={styles.video}
          autoPlay={true}
          loop={loop}
          muted={player.muted}
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
