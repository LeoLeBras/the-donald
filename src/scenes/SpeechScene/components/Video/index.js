/* @flow */

import React from 'react'
import VideoModule from '@components/Video'

type Props = {
  onTrackDuration: Function
}

const Video = (props: Props): React$Element => {
  const { onTrackDuration } = props
  return (
    <VideoModule
      source="http://localhost:3001/videos/launch.mp4"
      onTrackDuration={onTrackDuration}
    />
  )
}

export default Video
