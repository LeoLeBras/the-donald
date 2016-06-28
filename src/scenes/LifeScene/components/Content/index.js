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
        <StartButton onPress={onNext} />
      </div>
    </div>
  )
}

export default Content
