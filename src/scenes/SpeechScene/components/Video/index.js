/* @flow */

import React, { Component } from 'react'
import VideoContainer from '@containers/VideoContainer'

type Props = {
  onTrackDuration: Function,
  currentTime: number,
}

class Video extends Component {

  props: Props

  shouldComponentUpdate(nextProps) {
    return nextProps.currentTime !== this.props.currentTime
  }

  render(): React$Element {
    const { onTrackDuration, currentTime } = this.props
    return (
      <VideoContainer
        source="http://localhost:3001/videos/launch.mp4"
        onTrackDuration={onTrackDuration}
        currentTime={{
          key: Math.random(),
          value: currentTime,
        }}
        enableDurationHandling={true}
      />
    )
  }

}

export default Video
