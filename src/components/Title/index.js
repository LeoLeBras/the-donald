/* @flow */

import React from 'react'
import styles from './styles'

type Props = {
  props: string,
}

const Title = (props: Props): React$Element => {
  const { children } = props
  const size = props.size || '9rem'
  return (
    <span className={styles.text} style={{ fontSize: size }}>
      {children}
    </span>
  )
}

export default Title
