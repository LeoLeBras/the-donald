/* @flow */

import React from 'react'
import styles from './StartButton'

type Props = {
  onPress: () => any,
}

const StartButton = (props: Props) => {
  const { onPress } = props
  const size = 20
  return (
    <div className={styles.container} onClick={onPress}>
      <svg className={styles.icon} height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
      </svg>
    </div>
  )
}

export default StartButton
