import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class FlipInYPage extends Component {
  render() {
    return (
      <div className="react-transition flip-in-y">
        <Page title="Flip In Y" />
      </div>
    )
  }
}
export default FlipInYPage
