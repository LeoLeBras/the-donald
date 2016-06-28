/* @flow */

import React from 'react'
import PlayPause from './PlayPause'
import Volum from './Volum'
import styles from './Control'

const Control = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <PlayPause />
      </div>
      <div className={styles.item}>
        <Volum />
      </div>
    </div>
  )
}

export default Control
