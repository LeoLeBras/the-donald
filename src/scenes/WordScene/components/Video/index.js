/* @flow */

import React from 'react'
import VideoContainer from '@containers/VideoContainer'

type Props = {
  source: string,
}

const Video = (props: Props): React$Element => {
  const { source } = props
  return (
    <VideoContainer
      source={source}
    />
  )
}

export default Video
