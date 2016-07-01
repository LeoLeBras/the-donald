/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'recompose'
import { pause } from '@store/modules/player'
import Header from './components/Header'
import Video from './components/Video'
import Pagination from './components/Pagination'
import styles from './ChapterScene'
import data from './data.json'

type Props = {}
type State = {
  showVideo: boolean,
  isCurrentSlide: boolean,
}

class ChapterScene extends Component {

  props: Props
  state: State = {
    showVideo: false,
    isCurrentSlide: true,
  }

  isMount = true

  componentDidMount() {
    if (!this.props.player.paused) {
      this.props.pause()
    }
    window.addEventListener('hashchange', () => this.onHashChanging())
  }

  onHashChanging() {
    const { slug } = this.props.params
    const { hash } = window.location
    const param = hash.split('/')[2]
    const normalizedParam = param ? param.split('?')[0] : 'sorry'
    if (this.isMount) {
      if (slug !== normalizedParam) {
        this.setState({
          isCurrentSlide: false,
        })
      }
      else if (slug == normalizedParam && !this.state.isCurrentSlide) {
        this.setState({
          isCurrentSlide: true,
        })
      }
    }
  }

  componentWillUnmount() {
    this.isMount = false
    window.removeEventListener('hashchange', () => this.onHashChanging(), true)
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
      if (!nextProps.player.paused) {
        this.props.pause()
      }
      this.setState({
        showVideo: false,
      })
    }
  }

  onEndingVideo() {
    const { slug } = this.props.params
    const currentChapter = data.find(item => item.slug == slug )
    const nextChapter = data.find(item => item.id == parseInt(currentChapter.id) + 1)
    if (nextChapter) {
      this.props.router.replace('/chapter/' + nextChapter.slug)
    }
    else {
      this.props.router.replace('/select')
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.showVideo != this.state.showVideo ||
      nextState.isCurrentSlide != this.state.isCurrentSlide
    )
  }

  render(): React$Element {
    const { slug } = this.props.params
    const { showVideo, isCurrentSlide } = this.state
    const chapter = data.find(item => item.slug == slug )
    return (
      <div className={styles.container} style={{ backgroundImage: `url('http://localhost:3001/images/${chapter.slug}.jpg')` }}>
        <Header
          onNext={::this.onShowVideo}
          {...chapter}
          showVideo={showVideo}
        />
        { isCurrentSlide &&
          <Video
            source={`http://localhost:3001/videos/${chapter.slug}.mp4`}
            showVideo={showVideo}
            onEndingVideo={::this.onEndingVideo}
          />
        }
        <Pagination
          prev={data.find(item => item.id == parseInt(chapter.id) - 1)}
          next={data.find(item => item.id == parseInt(chapter.id) + 1)}
        />
      </div>
    )
  }

}

export default compose(
  connect((state) => ({
    player: state.player,
  }), { pause }),
  withRouter
)(ChapterScene)
