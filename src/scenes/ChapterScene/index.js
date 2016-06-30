/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pause } from '@store/modules/player'
import Header from './components/Header'
import Video from './components/Video'
import Pagination from './components/Pagination'
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

  componentDidMount() {
    if (!this.props.player.paused) {
      this.props.pause()
    }
  }

  onShowVideo() {
    this.props.pause()
    this.setState({
      showVideo: !this.state.showVideo,
    })
  }

  componentWillReceiveProps(nextProps) {
    const chapter = data.find(
      item => item.slug == this.props.params.slug
    )
    const newChapter = data.find(
      item => item.slug == nextProps.params.slug
    )
    if (chapter.id !== newChapter.id) {
      this.props.pause()
      this.setState({
        showVideo: !this.state.showVideo,
      })
    }
  }

  onEndingVideo() {
    const { slug } = this.props.params
    const currentChapter = data.find(item => item.slug == slug )
    const nextChapter = data.find(item => item.id == parseInt(currentChapter.id) + 1)
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
      <div className={styles.container} style={{ backgroundImage: `url('http://localhost:3001/images/${chapter.slug}.jpg')` }}>
        <Header
          onNext={::this.onShowVideo}
          {...chapter}
          showVideo={showVideo}
        />
        <Video
          source={`http://localhost:3001/videos/${chapter.slug}.mp4`}
          showVideo={showVideo}
          onEndingVideo={::this.onEndingVideo}
        />
        <Pagination
          prev={true}
          next={true}
        />
      </div>
    )
  }

}

export default connect((state) => ({
  player: state.player,
}), { pause })(ChapterScene)
