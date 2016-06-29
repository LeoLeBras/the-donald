/* @flow */

import React from 'react'
import styles from './Header'

type Props = {
  title: string,
}

const Header = (props: Props): React$Element => {
  const { title } = props
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
    </div>
  )
}

export default Header
