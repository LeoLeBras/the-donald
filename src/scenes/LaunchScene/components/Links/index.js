/* @flow */

import React from 'react'
import { Motion, spring } from 'react-motion'
import { Link } from 'react-router'
import styles from './Links'

const Links = (props): React$Element => {
  const { open } = props
  return (
    <Motion style={{ toValue: spring(open ? 1 : 0) }}>
      {({ toValue }) => (
        <div className={styles.container} style={{ opacity: toValue }}>
          <Link to="/chapter/childhood" className={styles.link}>His Life</Link>
          <Link to="/speech" className={styles.link}>What he said ?</Link>
          <Link to="/words" className={styles.link}>Who is he ?</Link>
        </div>
      )}
    </Motion>
  )
}

export default Links
