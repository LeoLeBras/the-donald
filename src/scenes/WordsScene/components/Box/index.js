/* @flow */

import React, { Component } from 'react'
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

class Box extends Component {

  props: Props

  render(): React$Element {
    const { name, rank, gif, selectBox, id, active } = this.props
    return (
      <div
        className={styles.container}
        style={{
          width: getWidth(rank),
          height: getHeight(rank),
        }}
        onMouseEnter={() => selectBox(id)}>
        <img className={styles.gif} src={gif} />
        <div className={styles.text}>
          {name}
        </div>
        { !active &&
          <div className={styles.overlay}></div>
        }
      </div>
    )
  }

}

export default Box
