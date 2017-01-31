import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainNav from './MainNav'
// import { exampleActionSync, exampleActionAsync } from '../../actions/exampleAction'

import injectSheet from 'react-jss'
import { appStyles } from './app.jss'

const mapStateToProps = state => ({
  families: state.families,
  compassionFamilies: state.compassionFamilies,
  counselors: state.counselors
})

const mapDispatchToProps = dispatch => (bindActionCreators({

}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
@injectSheet(appStyles)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    compassionFamilies: PropTypes.array.isRequired,
    counselors: PropTypes.array.isRequired,
    families: PropTypes.array.isRequired,
    sheet: PropTypes.object
  }

  state = {}

  render () {
    const {children} = this.props

    return (
      <div>
        <h1>Walk with me</h1>
        <MainNav />
        <section>{children}</section>
      </div>
    )
  }
}
