/* @flow */

import React, { Component } from 'react'
import styles from './Content'

type Props = {
  word: null | string,
}

class Content extends Component {
  props: Props
  render(): React$Element {
    const { word } = this.props
    return (
      <div>
        { word &&
          <div className={styles.container}>
            <div className={styles.text}>Immigration</div>
            <div className={styles.box}></div>
          </div>
        }
      </div>
    )
  }
}

export default Content
