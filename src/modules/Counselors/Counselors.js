import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Entity from '../../components/Entity'
import PersonForm from '../../components/PersonForm'
import GroupForm from '../../components/GroupForm'
import {saveCounselor, deleteCounselor} from '../../actions/counselorActions'

const mapStateToProps = state => ({
  counselors: state.counselors
})

const mapDispatchToProps = dispatch => (bindActionCreators({
  saveCounselor, deleteCounselor
}, dispatch))

@connect(mapStateToProps, mapDispatchToProps)
export default class Counselors extends Component {
  static propTypes = {
    counselors: PropTypes.array,
    deleteCounselor: PropTypes.func.isRequired,
    saveCounselor: PropTypes.func.isRequired
  }

  state = {
    activePerson: null
  }

  showForm = (counselor = {}) => {
    this.setState({ activePerson: counselor })
  }

  submit = (counselor) => {
    console.log('submit', counselor)
    this.props.saveCounselor(counselor)
    this.setState({ activePerson: null })
  }

  cancel = () => {
    this.setState({ activePerson: null })
  }

  delete = (counselor) => {
    this.props.deleteCounselor(counselor)
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
          {counselors.map((counselor, i) => {
            return (
              <li key={`counselor-${i}`}>
                <Entity data={counselor} editCb={this.showForm.bind(this, counselor)} />
                <button type="button" onClick={this.delete.bind(this, counselor)}>[X]</button>
              </li>
            )
          })}
        </ul>

        <GroupForm />
      </div>
    )
  }
}
