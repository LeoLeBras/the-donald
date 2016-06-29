/* @flow */

import React, { Component } from 'react'
import Back from '@components/Back'
import Header from './components/Header'

class WordScene extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render(): React$Element {
    return (
      <div>
        <Header />
        content...
        <Back goBack={() => this.context.router.replace('/words')} />
      </div>
    )
  }

}

export default WordScene
