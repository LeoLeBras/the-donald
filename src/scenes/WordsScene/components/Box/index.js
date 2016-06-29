/* @flow */

import React, { Component } from 'react'
import className from 'classnames'
import FavoriteIcon from './FavoriteIcon'
import ArrowIcon from './ArrowIcon'
import styles from './Box'

type Props = {
  name: string,
  rank: number,
}

class Box extends Component {

  props: Props

  state = {
    liked: false
  }

  onLiked() {
    this.setState({
      liked: !this.state.liked,
    })
  }

  render(): React$Element {
    const { onClick, name, rank, slug, selectBox, id, active } = this.props
    const likes = parseInt(this.props.likes) + parseInt(this.state.liked ? 1 : 0)
    return (
      <div
        className={className({
          [styles.container]: true,
          [styles.largeContainer]: rank == 1,
          [styles.mediumContainer]: rank == 2,
        })}
        onMouseEnter={() => selectBox(id)}>
        <img className={styles.gif} src={`http://api-trump.mickaelzhang.com/gif/${slug}`} />
        <div className={styles.content}>
          <div className={styles.title} onClick={onClick}>
            <ArrowIcon className={styles.arrowIcon} />
            {name}
          </div>
          { active &&
            <div className={className({
              [styles.favorite]: true,
              [styles.activeFavorite]: this.state.liked,
            })} onClick={::this.onLiked}>
              <FavoriteIcon />
              <span className={styles.likes}>{likes}</span>
            </div>
          }
        </div>
        { active &&
          <div className={styles.overlay}></div>
        }
      </div>
    )
  }

}

export default Box
