/* @flow */

import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import styles from './Trumpastic'

type Props = {
  score: number
}

class Trumpastic extends Component {
  props: Props
  shouldComponentUpdate(nextProps) {
    return nextProps.score !== this.props.score
  }
  render(): React$Element {
    const { score } = this.props
    return (
      <div className={styles.container}>
        <Motion style={{ score: spring(score) }}>
          {({ score }) => (
            <div className={styles.score}>{Math.floor(score)}</div>
          )}
        </Motion>
        Trumpastic
      </div>
    )
  }
}

export default Trumpastic
