import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from './Page';

class FlipInXReversePage extends Component {
  render() {
    return (
      <div className="react-transition flip-in-x-reverse">
        <Page title="Flip In X Reverse" docs={`<div className="react-transition flip-in-x-reverse"></div>`}/>
      </div>
    )
  }
}
export default FlipInXReversePage
