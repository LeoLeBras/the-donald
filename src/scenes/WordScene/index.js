/* @flow */

import React, { Component } from 'react'
import Back from '@components/Back'
import Header from './components/Header'
import Text from './components/Text'
import Tweets from './components/Tweets'
import styles from './WordScene'
import content from './content.json'

class WordScene extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render(): React$Element {
    const { slug } = this.props.params
    const word = content.find(item => item.slug == slug)
    return (
      <div className={styles.container}>
        <Header
          title={word.title}
        />
        <Text>{word.content}</Text>
        <Tweets
          slug={slug}
        />
        <Back goBack={() => this.context.router.replace('/words')} />
      </div>
    )
  }

}

export default WordScene
