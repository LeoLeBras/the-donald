/* @flow */

import React from 'react'
import styles from './styles'

type Props = {
  props: string,
}

const Title = (props: Props): React$Element => {
  const { children } = props
  const size = props.size || '8.5rem'
  return (
    <span className={styles.text}>
      {children}
    </span>
  )
}

export default Title
