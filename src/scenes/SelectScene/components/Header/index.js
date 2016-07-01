/* @flow */

import React from 'react'
import styles from './Header'

type Props = {}

const Header = (props: Props): React$Element => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Trump</span>
      <p className={styles.text}>
        Donald Trump is one of our best time demagogue
        during this experience discover the reasons for it success.
      </p>
    </div>
  )
}

export default Header
