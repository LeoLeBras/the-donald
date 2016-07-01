/* @flow */

import React, { Component } from 'react'
import UpIcon from './UpIcon'
import DownIcon from './DownIcon'
import { Motion, spring } from 'react-motion'
import styles from './Content'

type Props = {
  word: null | string,
  event: null | string,
}

class Content extends Component {
  props: Props
  shouldComponentUpdate(nextProps) {
    return (
      this.props.word !== nextProps.word ||
      this.props.event !== nextProps.event
    )
  }
  render(): React$Element {
    const { word, event, intro } = this.props
    const eventName = event ? event.name : ''
    const eventDate = event ? event.date : ''
    const eventState = event ? event.state : null
    return (
      <div className={styles.container}>
        <Motion style={{ opacity: spring(event || intro ? 1 : 0) }}>
          {({ opacity }) => (
            <div style={{ opacity: opacity }} className={styles.overlay}></div>
          )}
        </Motion>
        <Motion style={{ opacity: spring(intro ? 1 : 0) }}>
          {({ opacity }) => (
            <div style={{ opacity: opacity }} className={styles.introContainer}>
              <div className={styles.introTitle}>What did he say ?</div>
              <div className={styles.introExplain}>
                THE CHART TRACKING DONALD TRUMP’S POLL RATING
                AGAINST SOME OF THE MORE OUTRAGEOUS COMMENTS HE HAS MADE
                THUS FAR ON THE PRIMARY CAMPAIGN TRAIL.
              </div>
              <div className={styles.introTrumpastic}>
                Trumpastic : Republican nomination polling, national averages, %
              </div>
            </div>
          )}
        </Motion>
        <Motion style={{ opacity: spring(word ? 1 : 0) }}>
          {({ opacity }) => (
            <div className={styles.wordContainer} style={{ opacity: opacity }}>
              <div className={styles.wordText}>{word}</div>
              <div className={styles.wordBox}></div>
            </div>
          )}
        </Motion>
        <Motion style={{ opacity: spring(event ? 1 : 0) }}>
          {({ opacity }) => (
            <div className={styles.eventContainer} style={{ opacity: opacity }}>
              <div className={styles.eventBox}></div>
              <div className={styles.eventDate}>{eventDate}</div>
              <div className={styles.eventTitle}>{eventName}</div>
              <div className={styles.icon}>
                { eventState == 'up' && <UpIcon /> }
                { eventState == 'down' && <DownIcon /> }
              </div>
            </div>
          )}
        </Motion>
      </div>
    )
  }
}

export default Content
