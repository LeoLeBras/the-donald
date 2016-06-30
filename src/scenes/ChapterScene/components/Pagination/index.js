/* @flow */

import React from 'react'
import { withRouter } from 'react-router'
import className from 'classnames'
import styles from './Pagination'

type Props = {}

const Pagination = (props: Props): React$Element => {
  const { prev, next } = props
  return (
    <div>
      { prev &&
        <div className={className({
          [styles.item]: true,
          [styles.prevItem]: true,
        })} onClick={() => props.router.replace(`chapter/${prev.slug}`)}>0{prev.id} | Prev</div>
      }
      { next &&
        <div className={className({
          [styles.item]: true,
          [styles.nextItem]: true,
        })} onClick={() => props.router.replace(`chapter/${next.slug}`)}>Next | 0{next.id}</div>
      }
    </div>
  )
}

export default withRouter(Pagination)
