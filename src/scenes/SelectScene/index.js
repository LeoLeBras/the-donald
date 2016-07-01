/* @flow */

import React, { Component } from 'react'
import Header from './components/Header'
import Part from './components/Part'
import styles from './SelectScene'

class SelectScene extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render(): React$Element {
    const { router } = this.context
    return (
      <div className={styles.container}>
        <Part
          image="http://localhost:3001/images/trump-guy.jpg"
          text="What he said ?"
          onClick={() => router.replace('/speech')}
        />
        <Part
          image="http://localhost:3001/images/trump-people.jpg"
          text="Who he is ?"
          onClick={() => router.replace('/words')}
        />
        <div className={styles.overlay}></div>
        <Header />
      </div>
    )
  }

}

export default SelectScene
