import React, { Component, PropTypes } from 'react'
import PersonForm from '../components/PersonForm'

const DEFAULT_FORM = {
  group: {
    name: '',
    people: [],
    tags: [],
    notes: '',
    comments: [],
    attributes: []
  }
}

export default class GroupForm extends Component {
  static propTypes = {
    cancelCb: PropTypes.func,
    submitCb: PropTypes.func,
    group: PropTypes.shape({
      name: PropTypes.string,
      people: PropTypes.array,
      tags: PropTypes.arrayOf(PropTypes.object),
      notes: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.object),
      attributes: PropTypes.arrayOf(PropTypes.object)
    })
  }

  state = {
    ...DEFAULT_FORM,
    ...this.props.group
  }

  submit = () => {
    const {submitCb} = this.props
    const {person} = this.state

    if (submitCb instanceof Function) {
      submitCb({ ...person })
    }

    this.setState({ ...DEFAULT_FORM })
  }

  cancel = () => {
    const {cancelCb} = this.props

    this.setState({
      ...DEFAULT_FORM
    }, () => {
      if (cancelCb instanceof Function) {
        cancelCb()
      }
    })
  }

  updateForm = (type, value) => {
    this.setState({
      person: {
        [type]: value
      }
    }, () => {
      console.log(this.state.person)
    })
  }

  render () {
    const {group} = this.state
    return (
      <div className="form">

      </div>
    )
  }
}
