/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mute } from '@store/modules/player'
import Container from './components/Container'
import Control from './components/Control'
import Nav from './components/Nav'

class FooterContainer extends Component {
  render() {
    return (
      <Container>
        <Control {...this.props} />
        <Nav />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  player: state.player,
})

const mapActionsToProps = { mute }

export default connect(
  mapStateToProps,
  mapActionsToProps
)(FooterContainer)
