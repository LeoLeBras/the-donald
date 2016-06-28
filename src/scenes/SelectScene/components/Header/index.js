/* @flow */

import React from 'react'
import styles from './Header'

type Props = {}

const Header = (props: Props): React$Element => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Trump</span>
      <p className={styles.text}>
        Donald Trump utilise des mots très simples pour nous parler.
        Nous avons fait de même pour parler de l’homme politique
        américain.
      </p>
    </div>
  )
}

export default Header
