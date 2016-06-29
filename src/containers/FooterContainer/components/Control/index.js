/* @flow */

import React from 'react'
import PlayPause from './PlayPause'
import Volum from './Volum'
import styles from './Control'

const Control = (props: Props): React$Element => {
  const { pause, player, mute } = props
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <PlayPause
          pause={pause}
          paused={player.paused}
        />
      </div>
      <div className={styles.item}>
        <Volum
          mute={mute}
          muted={player.muted}
        />
      </div>
    </div>
  )
}

export default Control
