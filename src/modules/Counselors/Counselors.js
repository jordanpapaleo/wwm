import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Entity from '../../components/Entity'
import PersonForm from '../../components/PersonForm'

const mapStateToProps = state => ({
  counselors: state.counselors
})

const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class Counselors extends Component {
  static propTypes = {
    counselors: PropTypes.array
  }

  state = {
    activePerson: null
  }

  showForm = (counselor = {}) => {
    this.setState({ activePerson: counselor })
  }

  submit = (counselor) => {
    this.setState({ activePerson: null })
  }

  cancel = () => {
    this.setState({ activePerson: null })
  }

  render () {
    const {counselors} = this.props
    const {activePerson} = this.state

    return (
      <div>
        <h2>Counselors</h2>
        <button onClick={this.showForm.bind(this, {})}>New</button>
        {activePerson && <PersonForm person={activePerson} submitCb={this.submit} cancelCb={this.cancel} />}
        <ul>
          {counselors.map((counselor) => {
            return (
              <li key={counselor}>
                <Entity data={counselor} editCb={this.showForm.bind(this, counselor)} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
