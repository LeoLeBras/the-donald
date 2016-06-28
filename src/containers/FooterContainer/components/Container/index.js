/* @flow */

import React from 'react'
import styles from './Container'

type Props = {
  children: React$Element,
}

const Container = (props: Props) => {
  const { children } = props
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container
