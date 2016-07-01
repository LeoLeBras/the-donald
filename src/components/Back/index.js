/* @flow */

import React from 'react'
import { withRouter } from 'react-router'
import Icon from './Icon'
import styles from './Back'

type Props = {
  router: {
    goBack: Function,
  },
}

const Back = (props: Props): React$Element => {
  const { goBack } = props
  return (
    <div className={styles.container} onClick={() => props.router.goBack()}>
      <Icon className={styles.icon} />
      Back
    </div>
  )
}

export default withRouter(Back)
