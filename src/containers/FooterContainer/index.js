/* @flow */

import React, { Component } from 'react'
import Container from './components/Container'
import Control from './components/Control'
import Nav from './components/Nav'

class FooterContainer extends Component {
  render() {
    return (
      <Container>
        <Control />
        <Nav />
      </Container>
    )
  }
}

export default FooterContainer
