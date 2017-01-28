import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  families: state.families
})

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class Families extends Component {
  static propTypes = {
    families: PropTypes.array
  }

  state = {}

  render () {
    return (
      <div>Families</div>
    )
  }
}
