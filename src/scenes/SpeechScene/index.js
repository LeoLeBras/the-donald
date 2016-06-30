/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pause } from '@store/modules/player'
import Back from '@components/Back'

import Graph from './components/Graph'
import Video from './components/Video'
import Content from './components/Content'
import Trumpastic from './components/Trumpastic'
import wordsData from './data/words.json'
import eventsData from './data/events.json'
import popularityData from './data/popularity.json'
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
    progress: 0,
    score: 0,
    currentTimeVideo: 0,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    if (this.props.player.paused) {
      this.props.pause()
    }
  }

  onTrackDuration(time, videoDuration) {

    // Normalizr events and words
    const newState = {}
    const duration = Math.floor(time)
    const words = wordsData.filter(
      item => {
        const fromNormalized = item.from.split(':').map(a => parseInt(a))
        const toNormalized = item.to.split(':').map(a => parseInt(a))
        const from = Math.floor(fromNormalized[1] + fromNormalized[0] * 60)
        const to = Math.floor(toNormalized[1] + toNormalized[0] * 60)
        return (
          from <= duration &&
          to >= duration
        )
      }
    )
    const events = eventsData.filter(
      item => {
        const fromNormalized = item.from.split(':').map(a => parseInt(a))
        const toNormalized = item.to.split(':').map(a => parseInt(a))
        const from = Math.floor(fromNormalized[1] + fromNormalized[0] * 60)
        const to = Math.floor(toNormalized[1] + toNormalized[0] * 60)
        return (
          from <= duration &&
          to >= duration
        )
      }
    )

    // Remove word / event
    if (!words.length && this.state.word !== null) {
      newState.word = null
    }
    if (!events.length && this.state.event !== null) {
      newState.event = null
    }

    // Add word
    words.forEach(item => {
      newState.word = item.name
    })

    // Add event
    events.forEach(item => {
      newState.event = {
        name: item.name,
        date: item.date,
        state: item.state,
      }
    })

    // Handle progress
    const currentEvent = eventsData.filter(
      item => {
        const fromNormalized = item.from.split(':').map(a => parseInt(a))
        const from = Math.floor(fromNormalized[1] + fromNormalized[0] * 60)
        return (
          from <= duration
        )
      }
    ).reverse()[0]

    const currentPopularityItem = currentEvent
      ? popularityData.d
        .map((item, index) => ({
          ...item,
          index
        }))
        .find(
          (item) =>  item.d == currentEvent.date
        )
      : null


    const progress = currentPopularityItem
      ? currentPopularityItem.index / (popularityData.d.length - 1)
      : 0

    const score = Math.floor(
      currentPopularityItem
        ? currentPopularityItem.m / 32 * 100
        : 0
    )

    // Set state
    this.setState({
      ...newState,
      progress,
      score,
    })
  }

  onChangeCurrentTime(e) {
    const videoDuration = 96
    const x = e.pageX || e.pageY
      ? e.pageX
      : e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft

    const duration =
      (x / window.innerWidth * videoDuration)
      * popularityData.d.length / videoDuration

    const currentPopularityItem = popularityData.d
      .map((item, index) => ({
        ...item,
        index
      }))
      .filter(item => item.index < duration)
      .filter(item => eventsData.find(event => event.date == item.d))
      .reverse()[0]

    const currentEvent = eventsData
      .find(event => currentPopularityItem.d == event.date)

    if (currentEvent) {
      const from = currentEvent.from.split(':').map(a => parseInt(a))
      this.setState({
        currentTimeVideo: Math.floor(from[1] + from[0] * 60)
      })
    }

  }

  render(): React$Element {
    return (
      <div className={styles.container} onClick={::this.onChangeCurrentTime}>
        <Video
          onTrackDuration={::this.onTrackDuration}
          currentTime={this.state.currentTimeVideo}
        />
        <Graph
          events={eventsData}
          popularity={popularityData}
          progress={this.state.progress}
        />
        <Content
          word={this.state.word}
          event={this.state.event}
        />
        <Trumpastic
          score={this.state.score}
        />
        <Back
          goBack={() => this.context.router.replace('/select')}
        />
      </div>
    )
  }

}

export default connect(state => ({
  player: state.player,
}), { pause })(SpeechScene)
