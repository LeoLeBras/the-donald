/* @flow */

import React, { Component } from 'react'

type Props = {
  source: string,
  onTrackDuration: Function,
}

class Video extends Component {
  componentDidMount() {
    const { onTrackDuration } = this.props
    // setInterval(() => {
    //   onTrackDuration(
    //     this.refs.video.currentTime
    //   )
    // }, 500)
  }
  render() {
    const { source } = this.props
    return (
      <video
        ref="video"
        muted={true}
        autoPlay={true}
        src={source}>
      </video>
    )
  }
}

export default Video
