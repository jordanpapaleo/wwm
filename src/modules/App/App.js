import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainNav from './MainNav'
// import { exampleActionSync, exampleActionAsync } from '../../actions/exampleAction'

const mapStateToProps = state => ({
  families: state.families,
  compassionFamilies: state.compassionFamilies,
  counselors: state.counselors
})

const mapDispatchToProps = dispatch => (bindActionCreators({

}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    compassionFamilies: PropTypes.array.isRequired,
    counselors: PropTypes.array.isRequired,
    families: PropTypes.array.isRequired
  }

  state = {}

  render () {
    const {children} = this.props

    return (
      <div>
        <h1>Walk with me</h1>
        <MainNav />
        { this.renderThing() }
        <section>{children}</section>
      </div>
    )
  }

  renderThing () {
    return (
      <div style={{ display: 'flex', border: '1px solid grey', height: 100, alignItems: 'stretch' }}>
        <div style={{ width: 20, backgroundColor: 'orange' }}></div>
        <div style={{ flexGrow: 1, backgroundColor: 'yellow' }}></div>
      </div>
    )
  }
}
