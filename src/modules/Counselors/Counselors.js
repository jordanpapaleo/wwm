import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  counselors: state.counselors
})

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class Counselors extends Component {
  static propTypes = {
    counselors: PropTypes.array
  }

  state = {}

  render () {
    return (
      <div>Counselors</div>
    )
  }
}
