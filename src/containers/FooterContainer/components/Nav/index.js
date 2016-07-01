/* @flow */

import React, { Component } from 'react'
import { Link } from 'react-router'
import className from 'classnames'
import styles from './Nav'

class Nav extends Component {
  componentDidMount() {
    window.addEventListener('hashchange', () => this.forceUpdate())
  }
  render(): React$Element {
    const location = window.location.hash.substr(2).split('?')[0].split('/')[0]
    return (
      <nav className={styles.container}>
        <Link className={className({
          [styles.text]: true,
          [styles.activeText]: location == 'chapter',
        })} to="/chapter/childhood">
          His life
        </Link>
        <Link className={className({
          [styles.text]: true,
          [styles.activeText]: location == 'speech',
        })} to="/speech">
          What he said ?
        </Link>
        <Link className={className({
          [styles.text]: true,
          [styles.activeText]: location == 'word' || location == 'words',
        })} to="/words">
          Who is he ?
        </Link>
      </nav>
    )
  }
}

export default Nav
