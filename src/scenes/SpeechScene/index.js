/* @flow */

import React, { Component } from 'react'
import Graph from './components/Graph'
import Video from './components/Video'
import Content from './components/Content'
import data from './data.json'
import styles from './SpeechScene'

type Props = {}

type State = {
  word: null | string,
  event: null | Object,
}

class SpeechScene extends Component {

  props: Props

  state: State = {
    word: null,
    event: null,
  }

  onTrackDuration(time) {
    const duration = `00:${Math.floor(time) < 10 ? '0' : ''}${Math.floor(time)}`.split(':').join('')
    const content = data.filter(
      item => {
        return (
          item.from.split(':').join('') <= duration &&
          item.to.split(':').join('') >= duration
        )
      }
    )
    if (content.length > 0) {
      content.forEach(item => {
        if (item.type == 'word') {
          this.setState({
            word: item.payload.word
          })
        }
      })
      console.log(content)
    }
  }

   render(): React$Element {
    return (
      <div className={styles.container}>
        <Video
          onTrackDuration={::this.onTrackDuration}
        />
        <Graph />
        <Content {...this.state} />
      </div>
    )
  }

}

export default SpeechScene
