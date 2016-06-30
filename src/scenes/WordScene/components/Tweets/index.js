/* @flow */

import React, { Component } from 'react'
import 'whatwg-fetch';

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
      const response = await fetch('http://api-trump.mickaelzhang.com/tweet/nationalist')
      const tweets = await response.json()
      this.setState({ tweets })
    } catch(e) {}
  }

  render(): React$Element {
    return (
      <div>
        tweets
      </div>
    )
  }

}

export default Tweets
