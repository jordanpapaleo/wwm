import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  memorialTrees: state.memorialTrees
})

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class MemorialTrees extends Component {
  static propTypes = {
    memorialTrees: PropTypes.array.isRequired
  }

  state = {}

  render () {
    return (
      <div>MemorialTrees</div>
    )
  }
}
