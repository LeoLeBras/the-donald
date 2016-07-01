/* @flow */

import React, { Component } from 'react'
import TransitionGroup from 'react-addons-transition-group'
import FooterContainer from '@containers/FooterContainer'
import styles from './DefaultLayout'

type Props = {
  children: React$Element,
}

class DefaultLayout extends Component {
  props: Props
  render() {
    const { children } = this.props
    const { pathname } = this.props.location;
    const key = pathname.split('/')[1] || 'root';
    return (
      <div className={styles.container}>
        <TransitionGroup component="div" className={styles.wrapper}>
          {React.cloneElement(this.props.children, { key })}
        </TransitionGroup>
        <FooterContainer />
      </div>
    )
  }
}

export default DefaultLayout
