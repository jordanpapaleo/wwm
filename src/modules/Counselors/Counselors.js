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
    console.log('counselor', counselor)
    this.setState({ activePerson: counselor })
  }

  submit = (counselor) => {
    // TODO Save Person
    this.setState({ activePerson: null })
  }

  cancel = () => {
    this.setState({ activePerson: null })
  }

  render () {
    const {counselors} = this.props
    const {activePerson} = this.state

    console.log('activePerson', activePerson)

    return (
      <div>
        <h2>Counselors</h2>
        <button onClick={this.showForm}>New</button>
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
