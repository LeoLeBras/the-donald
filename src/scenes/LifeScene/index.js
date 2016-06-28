/* @flow */

import React, { Component } from 'react'
import Content from './components/Content'
import styles from './LifeScene'

type Props = {}

class LifeScene extends Component {

  props: Props

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  onNext() {
    this.context.router.replace('/select')
  }

  render(): React$Element {
    return (
      <div className={styles.container}>
        <Content
          onNext={::this.onNext}
        />
      </div>
    )
  }

}

export default LifeScene
