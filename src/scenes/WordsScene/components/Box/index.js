/* @flow */

import React from 'react'
import styles from './Box'

type Props = {
  name: string,
  rank: number,
}

function getWidth(rank: number): string {
  switch (rank) {
    case 1:
      return '25.25rem'
    case 2:
      return '25.25rem'
    case 3:
      return '12.5rem'
    case 4:
      return '12.5rem'
    case 5:
      return '12.5rem'
  }
}

function getHeight(rank: number): string {
  switch (rank) {
    case 1:
      return '25.25rem'
    case 2:
      return '25.25rem'
    case 3:
      return '12.5rem'
    case 4:
      return '12.5rem'
    case 5:
      return '12.5rem'
  }
}

const Box = (props: Props): React$Element => {
  const { name, rank } = props
  return (
    <div className={styles.container} style={{
      width: getWidth(rank),
      height: getHeight(rank),
    }}>
      {name}
    </div>
  )
}

export default Box
