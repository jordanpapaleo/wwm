import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

import injectSheet from 'react-jss'
import { mainNavStyles } from './mainNav.jss'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
@injectSheet(mainNavStyles)
export default class MainNav extends Component {
  render () {
    const liStyle = {
      height: 40,
      textAlign: 'center',
      backgroundColor: 'hotpink',
      lineHeight: '40px',
      flexGrow: 1,
      color: 'black',
      listStyleType: 'none'
    }

    return (
      <nav>
        <ul style={{ display: 'flex', flexDirection: 'row' }}>
          <li style={liStyle}><Link to="/families">Families</Link></li>
          <li style={liStyle}><Link to="/compassion">Compassion Families</Link></li>
          <li style={liStyle}><Link to="/counselors">Counselors</Link></li>
          <li style={liStyle}><Link to="/memorial">Memorial Trees</Link></li>
        </ul>
      </nav>
    )
  }
}
