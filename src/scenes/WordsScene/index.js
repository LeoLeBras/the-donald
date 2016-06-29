/* @flow */

import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import Back from '@components/Back'
import Box from './components/Box'
import { words } from './data'
import styles from './WordsScene'

type Props = {}

class WordsScene extends Component {

  props: Props

  state = { currentBox: 0 }

  selectBox(id) {
    this.setState({
      currentBox: id
    })
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render(): React$Element {
    const { currentBox } = this.state
    return (
      <div className={styles.container}>
        <Back goBack={() => this.context.router.replace('/select')} />
        <Masonry>
          {words.map((item, index) => (
            <Box
              key={index}
              {...item}
              active={currentBox == item.id}
              slug={words.find(word => word.id == currentBox).slug}
              selectBox={::this.selectBox}
              onClick={() => this.context.router.replace('/word/' + item.slug)}
            />
          ))}
        </Masonry>
      </div>
    )
  }

}

export default WordsScene
