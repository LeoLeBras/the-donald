/* @flow */

import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import Box from './components/Box'
import { words } from './data'

type Props = {}

class WordsScene extends Component {
  props: Props
  render(): React$Element {
    return (
      <Masonry>
        {words.map((item, index) => (
          <Box
            key={index}
            {...item}
          />
        ))}
      </Masonry>
    )
  }
}

export default WordsScene
