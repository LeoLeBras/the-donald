/* @flow */

import React from 'react'
import { Motion, spring } from 'react-motion'
import Title from '@components/Title'
import StartButton from '@components/StartButton'
import styles from './Header'

type Props = {
  onNext: Function,
  showVideo: number,
}

const Header = (props): React$Element => {
  const { onNext, showVideo, id, duration, name } = props
  return (
    <Motion style={{ toValue: spring(showVideo ? 0 : 1) }}>
      {({ toValue }) => (
        <div style={{ opacity: toValue }}>
          <div className={styles.circle}></div>
          <div className={styles.wrapper}>
            <div className={styles.metadata}>Chapter {id} | {duration}</div>
            <div className={styles.title}>Trump</div>
            <div className={styles.subtitle}>{name}</div>
            <StartButton onPress={onNext} />
          </div>
        </div>
      )}
    </Motion>
  )
}

export default Header
