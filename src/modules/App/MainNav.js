import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class MainNav extends Component {
  static propTypes = {}

  state = {}

  render () {
    return (
      <ul>
        <li><Link to="/families">Families</Link></li>
        <li><Link to="/compassion">Compassion Families</Link></li>
        <li><Link to="/counselors">Counselors</Link></li>
        <li><Link to="/memorial">Memorial Trees</Link></li>
      </ul>
    )
  }
}
