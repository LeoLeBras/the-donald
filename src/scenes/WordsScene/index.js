/* @flow */

import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import Box from './components/Box'
import { words } from './data'

type Props = {}

class WordsScene extends Component {

  props: Props

  state = { currentBox: 0 }

  selectBox(id) {
    this.setState({
      currentBox: id
    })
  }

  render(): React$Element {
    const { currentBox } = this.state
    return (
      <Masonry>
        {words.map((item, index) => (
          <Box
            key={index}
            {...item}
            gif={words.find(word => word.id == currentBox).gif}
            active={item.id === currentBox}
            selectBox={::this.selectBox}
          />
        ))}
      </Masonry>
    )
  }

}

export default WordsScene
