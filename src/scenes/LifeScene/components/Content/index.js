/* @flow */

import React from 'react'
import Title from '@components/Title'
import StartButton from '@components/StartButton'
import styles from './Content'

type Props = {
  onNext: Function,
}

const Content = (props): React$Element => {
  const { onNext } = props
  return (
    <div>
      <div className={styles.circle}></div>
      <div className={styles.wrapper}>
        <div className={styles.metadata}>Chapter 1 | 1min</div>
        <div className={styles.title}>Trump</div>
        <div className={styles.subtitle}>His Childhood</div>
        <StartButton onPress={onNext} />
      </div>
    </div>
  )
}

export default Content
