/* @flow */

import React, { Component } from 'react'
import 'whatwg-fetch';
import TweetIcon from './TweetIcon'
import styles from './Tweets'

type State = {
  tweets: Array,
}

class Tweets extends Component {

  state: State = { tweets: [] }

  componentWillMount() {
    this.fetchTweets()
  }

  async fetchTweets(): Promise<Array> {
    try {
      const response = await fetch('http://api-trump.mickaelzhang.com/tweet/' + this.props.slug)
      const tweets = await response.json()
      this.setState({ tweets })
    } catch(e) {}
  }

  render(): React$Element {
    const { tweets } = this.state
    return (
      <div className={styles.container}>
        {tweets.map((tweet, index) => (
          <div className={styles.item} key={index}>
            {tweet.text.split(' ').map(a => !a.includes('https://t.co') ? a : ' ').join(' ')}
            {tweet.user.name}
            <div className={styles.icon}>
              <TweetIcon />
            </div>
          </div>
        ))}
      </div>
    )
  }

}

export default Tweets
