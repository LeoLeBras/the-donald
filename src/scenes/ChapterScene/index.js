/* @flow */

import React, { Component } from 'react'
import Header from './components/Header'
import Video from './components/Video'
import styles from './ChapterScene'
import data from './data.json'

type Props = {}
type State = {
  showVideo: boolean,
}

class ChapterScene extends Component {

  props: Props
  state: State = {
    showVideo: false,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  onShowVideo() {
    this.setState({
      showVideo: !this.state.showVideo,
    })
  }

  onEndingVideo() {
    const { slug } = this.props.params
    const currentChapter = data.find(item => item.slug == slug )
    const nextChapter = data.find(item => item.id == currentChapter.id + 1)
    if (nextChapter) {
      this.context.router.replace('/chapter/' + nextChapter.slug)
    }
    else {
      this.context.router.replace('/select')
    }
  }

  render(): React$Element {
    const { slug } = this.props.params
    const { showVideo } = this.state
    const chapter = data.find(item => item.slug == slug )
    return (
      <div className={styles.container}>
        <Header
          onNext={::this.onShowVideo}
          {...chapter}
          showVideo={showVideo}
        />
        <Video
          source={chapter.video}
          showVideo={showVideo}
          onEndingVideo={::this.onEndingVideo}
        />
      </div>
    )
  }

}

export default ChapterScene
