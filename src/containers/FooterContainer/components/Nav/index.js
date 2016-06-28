/* @flow */

import React from 'react'
import styles from './Nav'

const Nav = () => {
  return (
    <nav className={styles.container}>
      <span className={styles.text}>
        Legal Notice
      </span>
      <span className={styles.text}>
        About
      </span>
    </nav>
  )
}

export default Nav
