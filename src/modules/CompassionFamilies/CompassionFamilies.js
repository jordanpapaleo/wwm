import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  compassionFamilies: state.compassionFamilies
})

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class CompassionFamilies extends Component {
  static propTypes = {
    compassionFamilies: PropTypes.array
  }

  state = {}

  render () {
    return (
      <div>CompassionFamilies</div>
    )
  }
}
