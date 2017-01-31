import React, { Component, PropTypes } from 'react'

export default class Attr extends Component {
  static propTypes = {
    type: PropTypes.oneOf([''])
  }

  state = {}

  render () {
    return (
      <div>Attr</div>
    )
  }
}
