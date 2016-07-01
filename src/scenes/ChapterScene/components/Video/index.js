/* @flow */

import React from 'react'
import { Motion, spring } from 'react-motion'
import { compose, onlyUpdateForKeys } from 'recompose'
import VideoContainer from '@containers/VideoContainer'
import styles from './Video'

type Props = {
  source: string,
  showVideo: boolean,
  onEndingVideo: Function,
}

const Video = (props: Props): React$Element => {
  const { source, showVideo, onEndingVideo } = props
  return (
    <Motion style={{ toValue: spring(showVideo ? 0 : 100) }}>
      {({ toValue }) => (
        <div style={{ transform: `translateY(${toValue}vh)` }} className={styles.container}>
          <VideoContainer
            source={source}
            onEndingVideo={onEndingVideo}
          />
        </div>
      )}
    </Motion>
  )
}

export default compose(
  onlyUpdateForKeys(['showVideo'])
)(Video)
