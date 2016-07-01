/* @flow */

import React, { Component } from 'react'
import TransitionGroup from 'react-addons-transition-group'
import { RouteTransition, presets } from 'react-router-transition'
import FooterContainer from '@containers/FooterContainer'
import styles from './DefaultLayout'

type Props = {
  children: React$Element,
}

type State = {
  oldLocation: string,
}

class DefaultLayout extends Component {

  props: Props

  state: State = {
    oldLocation: this.props.location.pathname,
  }

  async componentWillReceiveProps(nextProps) {
    const { pathname } = this.props.location
    const newPathname = nextProps.location.pathname
    const location = pathname[0] == '/' ? pathname.substring(1) : pathname
    const newLocation = newPathname[0] == '/' ? newPathname.substring(1) : newPathname
    if (location !== newLocation) {
      this.setState({
        oldLocation: location,
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.oldLocation !== this.state.oldLocation
  }

  render() {
    const { children } = this.props
    const { pathname } = this.props.location
    const { oldLocation } = this.state
    const key = pathname.split('/')[1] || 'root'
    const location = pathname[0] == '/' ? pathname.substring(1) : pathname

    let animPreset = presets.pop
    if (location.split('/')[0] == 'chapter' && oldLocation.split('/')[0] == 'chapter') {
      const chapters = ['childhood', 'ascension', 'politic']
      const oldChapter = oldLocation.split('/')[1]
      const chapter = location.split('/')[1]
      animPreset = chapters.indexOf(chapter) < chapters.indexOf(oldChapter)
        ? presets.slideRight
        : presets.slideLeft
    }


    return (
      <div className={styles.container}>
        <RouteTransition
          pathname={pathname}
          {...animPreset}>
          {this.props.children}
        </RouteTransition>
        <FooterContainer />
      </div>
    )
  }
}

export default DefaultLayout
