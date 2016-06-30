/* @flow */

import React from 'react'
import VideoContainer from '@containers/VideoContainer'
import styles from './Video'

type Props = {
  source: string,
}

const Video = (props: Props): React$Element => {
  const { source } = props
  return (
    <div>
      <VideoContainer
        source={source}
        loop={true}
      />
      <div className={styles.overlay}></div>
    </div>
  )
}

export default Video
