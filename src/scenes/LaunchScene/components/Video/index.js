/* @flow */

import React from 'react'
import { Motion, spring } from 'react-motion'
import VideoContainer from '@containers/VideoContainer'
import Skip from '@components/Skip'
import styles from './Video'

type Props = {
  onTrackDuration: () => any,
  open: boolean,
}

const Video = (props: Props): React$Element => {
  const { open, onTrackDuration } = props
  return (
    <div>
      <Motion style={{ toValue: spring(open ? 1.33 : 1) }}>
        {({ toValue }) => (
          <div style={{ transform: `scale(${toValue})` }}>
            <VideoContainer
              onTrackDuration={() => onTrackDuration()}
              source="http://localhost:3001/videos/launch.mp4"
              loop={true}
            />
          </div>
        )}
      </Motion>
      <Motion style={{ toValue: spring(open ? 1 : 0) }}>
        {({ toValue }) => (
          <div style={{ opacity: toValue }} className={styles.overlay}></div>
        )}
      </Motion>
    </div>
  )
}

export default Video
