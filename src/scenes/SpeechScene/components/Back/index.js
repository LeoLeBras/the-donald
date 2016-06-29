/* @flow */

import React from 'react'
import Icon from './Icon'
import styles from './Back'

type Props = {
  goBack: () => any,
}

const Back = (props: Props): React$Element => {
  const { goBack } = props
  return (
    <div className={styles.container} onClick={goBack}>
      <Icon className={styles.icon} />
      Back
    </div>
  )
}

export default Back
