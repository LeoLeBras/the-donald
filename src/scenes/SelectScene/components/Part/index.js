/* @flow */

import React from 'react'
import styles from './Part'

type Props = {
  image: string,
  text: string,
  onClick: () => any,
}

const Part = (props: Props): React$Element => {
  const { image, text, onClick } = props
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${image})` }} onClick={onClick}>
      <div className={styles.button}>{text}</div>
    </div>
  )
}

export default Part
