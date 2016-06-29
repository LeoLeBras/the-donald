/* @flow */

import React from 'react'
import styles from './Text'

type Props = {
  children: string,
}

const Text = (props: Props): React$Element => {
  const { children } = props
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Text
