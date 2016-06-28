/* @flow */

import React from 'react'
import { Motion, spring } from 'react-motion'
import Title from '@components/Title'
import StartButton from '@components/StartButton'
import styles from './Content'

type Props = {
  open: boolean,
  onNext: () => any,
}

const Content = (props: Props) => {
  const { open, onNext } = props
  return (
    <Motion style={{ toValue: spring(open ? 1 : 0) }}>
      {({ toValue }) => (
        <div style={{ opacity: toValue }}>
          <div className={styles.circle}></div>
          <div className={styles.wrapper}>
            <Title>Donald Trump</Title><br/>
            <span className={styles.subtitle}>Why is winning ?</span>
            <StartButton onPress={onNext} />
          </div>
        </div>
      )}
    </Motion>
  )
}

export default Content
